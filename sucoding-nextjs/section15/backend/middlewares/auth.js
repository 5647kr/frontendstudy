const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { verify } = require("../utils/jwt");

module.exports = async function authMiddleware(req, res, next) {
  let token = null;
  // 1. Authorization 헤더 먼저 확인
  const header = req.headers.authorization;
  if (header?.startsWith("Bearer ")) {
    token = header.split(" ")[1];
  }

  // 2. 헤더에 없으면 쿠키에서 확인
  if (!token && req.cookies?.access_token) {
    token = req.cookies.access_token;
  }

  // 3. 둘 다 없으면 실패
  if (!token) {
    return res.status(401).json({ error: "토큰이 제공되지 않았습니다." });
  }

  try {
    const { uid } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(uid);

    if (!user) {
      return res.status(401).json({ error: "회원 정보를 찾을 수 없습니다." });
    }

    req.user = user;
    next();
  } catch (err) {
    // access token 검증 실패 시 refresh token으로 재발급 시도
    const rt = req.cookies?.refresh_token;
    if (!rt) {
      console.error("JWT auth error", err.message);
      return res
        .status(401)
        .json({ error: "유효하지 않거나 만료된 토큰입니다" });
    }

    try {
      const { uid } = verify(rt);
      const user = await User.findOne({ _id: uid });
      if (!user) {
        return res
          .status(401)
          .json({ error: "유효하지 않거나 만료된 토큰입니다" });
      }

      req.user = user;
      return next();
    } catch (refreshErr) {
      // refresh token이 유효하지 않으면 DB에 남아있는 동일 토큰 제거
      try {
        if (rt) {
          await User.updateOne(
            { refreshTokens: rt },
            { $pull: { refreshTokens: rt } },
          );
        }
      } catch (cleanupErr) {
        console.error("Refresh token cleanup error", cleanupErr.message);
      }
      console.error("Refresh token error", refreshErr.message);
      return res.status(401).json({
        error: "토큰이 유효하지 않습니다. 다시 로그인해주세요",
      });
    }
  }
};
