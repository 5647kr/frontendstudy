const express = require("express");
const axios = require("axios");
const bcrypt = require("bcrypt");
const router = express.Router();

const User = require("../models/User");
const { signAccess, signRefresh, verify } = require("../utils/jwt");
const auth = require("../middlewares/auth");
const { initDB } = require("../config/db");

const {
  KAKAO_CLIENT_ID,
  KAKAO_CLIENT_SECRET,
  KAKAO_REDIRECT_URI,
  FRONTEND_URL,
} = process.env;

/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Authentication and user profile
 */

/**
 * 카카오 OAuth 시작
 * - 유효한 리프레시 토큰이 있으면 JWT 재발급 후 리다이렉트
 * - 그렇지 않으면 카카오 인가 화면으로 리다이렉트
 */
/**
 * @swagger
 * /auth/kakao:
 *   get:
 *     summary: Start Kakao OAuth flow
 *     tags: [Auth]
 *     responses:
 *       302:
 *         description: Redirect to Kakao authorization page or frontend callback
 */
router.get("/kakao", async (req, res) => {
  // 카카오 인가 페이지로 리다이렉트
  const kakaoAuthUrl = [
    "https://kauth.kakao.com/oauth/authorize",
    `?client_id=${KAKAO_CLIENT_ID}`,
    `&redirect_uri=${encodeURIComponent(KAKAO_REDIRECT_URI)}`,
    "&response_type=code",
    "&scope=profile_nickname,profile_image",
  ].join("");

  res.redirect(kakaoAuthUrl);
});

/**
 * 카카오 콜백 처리
 * - 인가 코드를 토큰으로 교환
 * - 카카오 프로필 조회 후 사용자 생성 또는 조회
 * - JWT 발급 및 리프레시 토큰 쿠키 저장
 */
/**
 * @swagger
 * /auth/kakao/callback:
 *   get:
 *     summary: Handle Kakao OAuth callback
 *     tags: [Auth]
 *     parameters:
 *       - in: query
 *         name: code
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       302:
 *         description: Redirect to frontend with access token and email flag
 */
router.get("/kakao/callback", async (req, res) => {
  const code = req.query.code;

  try {
    // 인가 코드로 액세스 토큰 요청
    const tokenRes = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      null,
      {
        params: {
          grant_type: "authorization_code",
          client_id: KAKAO_CLIENT_ID,
          client_secret: KAKAO_CLIENT_SECRET,
          redirect_uri: KAKAO_REDIRECT_URI,
          code,
        },
      },
    );

    // 카카오 사용자 정보 조회
    const kakaoUser = await axios.get("https://kapi.kakao.com/v2/user/me", {
      headers: { Authorization: `Bearer ${tokenRes.data.access_token}` },
    });

    const kakaoId = String(kakaoUser.data.id);
    const { profile } = kakaoUser.data.kakao_account;

    // 사용자 조회 또는 생성
    let user = await User.findOne({ kakaoId });
    if (!user) {
      const seed = Math.random().toString(36).substring(2, 12);
      const profileImage =
        profile.profile_image_url ||
        `https://gravatar.com/avatar/${seed}?d=identicon`;
      user = await User.create({
        kakaoId,
        nickname: profile.nickname,
        profileImage,
      });
    }
    // JWT 발급
    const access = signAccess(user._id);

    // 유저 이메일이 있으면 쿠키 저장함
    if (user?.email) {
      const refresh = signRefresh(user._id);
      user.refreshTokens.push(refresh);
      await user.save();

      // 액세스 토큰 쿠키 저장
      res.cookie("access_token", access, {
        httpOnly: true,
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        secure: process.env.NODE_ENV === "production",
        domain: ".sucoding.store",
      });

      // 리프레시 토큰 쿠키 저장
      res.cookie("refresh_token", refresh, {
        httpOnly: true,
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        secure: process.env.NODE_ENV === "production",
        domain: ".sucoding.store",
      });

      res.redirect(`${FRONTEND_URL}`);
    }
    // 없으면 사용자 이메일을 정보를 저장하도록 유도함
    else {
      res.redirect(
        `${FRONTEND_URL}/auth/callback/kakao?access_token=${access}&email=${user.email ? "Y" : "N"}`,
      );
    }
  } catch (err) {
    console.log("token error status:", err.response?.status);
    console.log("token error data:", err.response?.data);
    console.log("sent:", {
      redirect_uri: KAKAO_REDIRECT_URI,
      code,
      code_len: code?.length,
    });
    throw err;
  }
});

/**
 * 액세스 토큰 재발급
 * - 리프레시 토큰 검증 후 새 JWT 발급
 */
/**
 * @swagger
 * /auth/refresh:
 *   post:
 *     summary: Refresh access token using refresh token cookie
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: New access token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/AuthTokens"
 *       401:
 *         description: Invalid or missing refresh token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */
router.post("/refresh", async (req, res) => {
  const rt = req.cookies.refresh_token;
  if (!rt) return res.status(401).json({ error: "리프레시 토큰이 없습니다" });

  try {
    const { uid } = verify(rt);
    const user = await User.findOne({ _id: uid, refreshTokens: rt });
    if (!user) throw new Error();

    const access = signAccess(uid);
    const refresh = signRefresh(uid);
    user.refreshTokens = user.refreshTokens.filter((t) => t !== rt);
    user.refreshTokens.push(refresh);
    await user.save();

    return res.json({ accessToken: access, refreshToken: refresh });
  } catch {
    return res
      .status(401)
      .json({ error: "리프레시 토큰이 유효하지 않거나 만료되었습니다" });
  }
});

/**
 * 내 정보 조회
 * - 인증된 사용자 프로필 반환
 */
/**
 * @swagger
 * /auth/me:
 *   get:
 *     summary: Get current user profile
 *     tags: [Auth]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Current user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/User"
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */
router.get("/me", auth, (req, res) => {
  const { _id, kakaoId, email, profileImage, nickname } = req.user;
  return res.json({ id: _id, kakaoId, email, profileImage, nickname });
});

/**
 * 내 정보 수정
 * - 닉네임, 프로필 이미지 수정 가능
 * - 이메일 수정 불가
 */
/**
 * @swagger
 * /auth/me:
 *   patch:
 *     summary: Update current user profile (nickname, profileImage only)
 *     tags: [Auth]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nickname:
 *                 type: string
 *               profileImage:
 *                 type: string
 *                 nullable: true
 *     responses:
 *       200:
 *         description: Updated user profile
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/User"
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */
router.patch("/me", auth, async (req, res) => {
  const { nickname, profileImage, email } = req.body;

  if (email !== undefined) {
    return res.status(400).json({ error: "이메일은 변경할 수 없습니다." });
  }

  if (nickname === undefined && profileImage === undefined) {
    return res.status(400).json({
      error:
        "변경할 정보가 없습니다. nickname 또는 profileImage를 전달해주세요.",
    });
  }

  if (nickname !== undefined) req.user.nickname = nickname;
  if (profileImage !== undefined) req.user.profileImage = profileImage;

  try {
    await req.user.save();
    const {
      _id,
      kakaoId,
      email: userEmail,
      profileImage: savedProfileImage,
    } = req.user;

    return res.json({
      id: _id,
      kakaoId,
      email: userEmail,
      profileImage: savedProfileImage,
      nickname: req.user.nickname,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "내 정보 수정에 실패했습니다." });
  }
});

/**
 * 이메일 업데이트
 * - 사용자 이메일 수정
 */
/**
 * @swagger
 * /auth/update-email:
 *   patch:
 *     summary: Update user email
 *     tags: [Auth]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email]
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message: { type: string }
 *                 user: { $ref: "#/components/schemas/User" }
 *                 accessToken: { type:string }
 *                 refreshToken: { type:string }
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */
router.patch("/update-email", auth, async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "이메일은 필수입니다" });

  try {
    req.user.email = email;

    const access = signAccess(req.user._id);
    const refresh = signRefresh(req.user._id);
    req.user.refreshTokens = req.user.refreshTokens.filter(
      (t) => t !== req.cookies.refresh_token,
    );
    req.user.refreshTokens.push(refresh);
    await req.user.save();

    res.cookie("access_token", access, {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      secure: process.env.NODE_ENV === "production",
      domain: ".sucoding.store",
    });

    res.cookie("refresh_token", refresh, {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      secure: process.env.NODE_ENV === "production",
      domain: ".sucoding.store",
    });

    return res.json({
      message: "이메일이 성공적으로 업데이트되었습니다",
      user: req.user,
      accessToken: access,
      refreshToken: refresh,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "이메일 업데이트에 실패했습니다" });
  }
});

/**
 * 로그아웃
 * - 리프레시 토큰 제거 후 쿠키 삭제
 */
/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Logout and clear refresh token cookie
 *     tags: [Auth]
 *     responses:
 *       204:
 *         description: Logged out
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */
router.post("/logout", async (req, res) => {
  const rt = req.cookies.refresh_token;
  try {
    if (rt) {
      try {
        const { uid } = verify(rt);
        const user = await User.findOne({ _id: uid, refreshTokens: rt });
        if (user) {
          // 현재 요청의 리프레시 토큰만 제거
          user.refreshTokens = user.refreshTokens.filter((t) => t !== rt);
          await user.save();
        }
      } catch {}
    }

    res.clearCookie("access_token", {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      secure: process.env.NODE_ENV === "production",
      domain: ".sucoding.store",
    });

    res.clearCookie("refresh_token", {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      secure: process.env.NODE_ENV === "production",
      domain: ".sucoding.store",
    });

    return res.sendStatus(204);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "로그아웃에 실패했습니다" });
  }
});

/**
 * 일반 회원가입
 * - 이메일, 닉네임, 비밀번호 필수
 * - 비밀번호 해싱 및 랜덤 아바타 생성
 */
/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Sign up with email/password
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, nickname, password]
 *             properties:
 *               email: { type: string }
 *               nickname: { type: string }
 *               password: { type: string }
 *     responses:
 *       201:
 *         description: Signed up
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: string }
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 *       409:
 *         description: Email already used
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */
router.post("/signup", async (req, res) => {
  const { email, nickname, password } = req.body;
  if (!email || !nickname || !password) {
    return res
      .status(400)
      .json({ error: "이메일, 닉네임, 비밀번호는 필수입니다" });
  }

  if (await User.findOne({ email })) {
    return res.status(409).json({ error: "이미 사용 중인 이메일입니다" });
  }

  const hashed = await bcrypt.hash(password, 10);
  const seed = Math.random().toString(36).substring(2, 12);
  const profileImage = `https://gravatar.com/avatar/${seed}?d=identicon`;

  const user = await User.create({
    email,
    nickname,
    password: hashed,
    profileImage,
  });
  await user.save();

  return res.status(201).json({ success: "회원가입에 성공했습니다." });
});

/**
 * 일반 로그인
 * - 이메일, 비밀번호로 인증
 * - JWT 발급 및 리프레시 토큰 교체
 */
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login with email/password
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email: { type: string }
 *               password: { type: string }
 *     responses:
 *       200:
 *         description: Logged in with access token and user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken: { type: string }
 *                 user: { $ref: "#/components/schemas/User" }
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 *       401:
 *         description: Invalid credentials
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "이메일과 비밀번호는 필수입니다" });
  }

  const user = await User.findOne({
    email,
    $or: [{ kakaoId: { $exists: false } }, { kakaoId: null }],
  });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: "인증 정보가 일치하지 않습니다" });
  }

  const access = signAccess(user._id);
  const refresh = signRefresh(user._id);
  user.refreshTokens = user.refreshTokens.filter(
    (t) => t !== req.cookies.refresh_token,
  );
  user.refreshTokens = [refresh];
  await user.save();

  res.cookie("access_token", access, {
    httpOnly: true,
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    secure: process.env.NODE_ENV === "production",
    domain: ".sucoding.store",
  });

  res.cookie("refresh_token", refresh, {
    httpOnly: true,
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    secure: process.env.NODE_ENV === "production",
    domain: ".sucoding.store",
  });

  return res.json({ user });
});

/**
 * DB 연결 (옵션)
 * - 배포 시 DB 연결 문제 해결용
 */
/**
 * @swagger
 * /auth/connect:
 *   get:
 *     summary: Re-init DB connection
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Connection init triggered
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 */
router.get("/connect", (req, res) => {
  initDB();
  res.json("성공");
});

module.exports = router;
