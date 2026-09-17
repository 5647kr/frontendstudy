const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const Post = require("../models/Post");
const User = require("../models/User");
const { faker } = require("@faker-js/faker");

/**
 * @swagger
 * tags:
 *   - name: Posts
 *     description: Blog posts and comments
 */

// 전체 조회
// [GET] /posts
// 쿼리파라미터:
//  - sort: 'newest' | 'popular' | 'views' (없으면 최신순)
//  - category: 문자열 (없으면 전체 카테고리)
//  - search: 문자열 (title/content 검색)
//  - page: 숫자 (없으면 1)
//  - perPage: 숫자 (없으면 6)
// [GET] /posts?sort=newest|popular&category=...&search=...&page=...&perPage=...
/**
 * @swagger
 * /posts:
 *   get:
 *     summary: List posts with optional filters
 *     tags: [Posts]
 *     parameters:
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [newest, popular]
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *       - in: query
 *         name: page
 *         schema:
 *           type: number
 *           default: 1
 *       - in: query
 *         name: perPage
 *         schema:
 *           type: number
 *           default: 6
 *     responses:
 *       200:
 *         description: Posts list
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 posts:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Post"
 *                 pagination:
 *                   $ref: "#/components/schemas/Pagination"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */
router.get("/", async (req, res) => {
  try {
    // 1) 쿼리 파싱 (기본: 최신순, 전체 카테고리, page=1, perPage=6)
    let { sort, category, search, page, perPage } = req.query;

    // 2) 필터
    const filter = {};
    if (category) {
      filter.category = category;
    }
    if (search) {
      // title 또는 content에 search 문자열이 포함된 문서 검색
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } },
      ];
    }

    // 3) 정렬
    const sortOption = {};
    if (!sort || sort === "newest") sortOption.createdAt = -1;
    else if (sort === "popular" || sort === "views") sortOption.viewCount = -1;
    else sortOption.createdAt = -1;

    // 4) 페이지네이션 파싱
    let p = parseInt(page, 10);
    let pp = parseInt(perPage, 10);
    if (isNaN(p) || p <= 0) p = 1;
    if (isNaN(pp) || pp <= 0) pp = 6;
    const lim = pp;
    const skp = (p - 1) * pp;

    // 5) 전체 카운트 및 최대 페이지 계산
    const totalCount = await Post.countDocuments(filter);
    const maxPage = Math.ceil(totalCount / pp);

    // 6) 실제 조회 쿼리
    const query = Post.find(filter)
      .populate("author", "nickname profileImage")
      .populate("comments.author", "nickname profileImage")
      .lean();

    if (Object.keys(sortOption).length) query.sort(sortOption);
    query.limit(lim);
    query.skip(skp);

    const posts = await query;

    // 7) 응답
    const response = {
      posts,
      pagination: {
        totalCount,
        currentPage: p,
        perPage: pp,
        maxPage,
      },
    };
    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "서버 오류가 발생했습니다." });
  }
});
/**
 * @swagger
 * /posts/overview:
 *   get:
 *     summary: Get overview data (random, latest, popular)
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Overview data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 randomPost: { $ref: "#/components/schemas/Post" }
 *                 latestPosts:
 *                   type: array
 *                   items: { $ref: "#/components/schemas/Post" }
 *                 popularPosts:
 *                   type: array
 *                   items: { $ref: "#/components/schemas/Post" }
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */
router.get("/overview", async (req, res) => {
  try {
    // 1) 총 문서 수
    const total = await Post.countDocuments();

    // 2) 랜덤 인덱스 계산
    const rnd = Math.floor(Math.random() * total);

    // 3) 랜덤 1개 가져오기
    const randomPost = await Post.findOne()
      .skip(rnd)
      .populate("author", "nickname profileImage")
      .populate("comments.author", "nickname profileImage")
      .lean();

    // 4) 최신 6개
    const latestPosts = await Post.find()
      .sort({ createdAt: -1 })
      .limit(6)
      .populate("author", "nickname profileImage")
      .lean();

    // 5) 인기 6개 (viewCount 순)
    const popularPosts = await Post.find()
      .sort({ viewCount: -1 })
      .limit(6)
      .populate("author", "nickname profileImage")
      .lean();

    // 6) 응답
    res.json({ randomPost, latestPosts, popularPosts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "서버 오류가 발생했습니다." });
  }
});

/**
 * @swagger
 * /posts/me:
 *   get:
 *     summary: Get posts written by current user
 *     tags: [Posts]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: number
 *           default: 1
 *       - in: query
 *         name: perPage
 *         schema:
 *           type: number
 *           default: 6
 *     responses:
 *       200:
 *         description: My posts list
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 posts:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Post"
 *                 pagination:
 *                   $ref: "#/components/schemas/Pagination"
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */
router.get("/me", auth, async (req, res) => {
  try {
    let { page, perPage } = req.query;
    let p = parseInt(page, 10);
    let pp = parseInt(perPage, 10);

    if (isNaN(p) || p <= 0) p = 1;
    if (isNaN(pp) || pp <= 0) pp = 6;

    const filter = { author: req.user._id };
    const totalCount = await Post.countDocuments(filter);
    const maxPage = Math.ceil(totalCount / pp);

    const posts = await Post.find(filter)
      .sort({ createdAt: -1 })
      .skip((p - 1) * pp)
      .limit(pp)
      .populate("author", "nickname profileImage")
      .populate("comments.author", "nickname profileImage")
      .lean();

    return res.json({
      posts,
      pagination: {
        totalCount,
        currentPage: p,
        perPage: pp,
        maxPage,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "서버 오류가 발생했습니다." });
  }
});

// 단일 조회 & 조회수 증가
/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Get post by id (and increment view count)
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Post
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Post"
 *       404:
 *         description: Post not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */
router.get("/:id", async (req, res) => {
  // await new Promise((r) => setTimeout(r, 2000)); // 인위적 지연
  try {
    // 1) 해당 글을 viewCount + 1 한 채로 가져오기 (new: true → 업데이트된 문서 반환)
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { $inc: { viewCount: 1 } },
      { new: true },
    )
      .populate("author", "nickname profileImage")
      .populate("comments.author", "nickname profileImage")
      .lean();

    if (!post) {
      return res.status(404).json({ error: "게시글을 찾을 수 없습니다." });
    }

    // 2) 응답
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "서버 오류가 발생했습니다." });
  }
});

// 생성
/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a post
 *     tags: [Posts]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, category, content]
 *             properties:
 *               title: { type: string }
 *               category: { type: string }
 *               thumbnail: { type: string, nullable: true }
 *               content: { type: string }
 *     responses:
 *       201:
 *         description: Created post
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Post"
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */
router.post("/", auth, async (req, res) => {
  const { title, category, thumbnail, content } = req.body;
  const post = await Post.create({
    title,
    category,
    thumbnail,
    content,
    author: req.user._id,
  });
  res.status(201).json(post);
});

/**
 * @swagger
 * /posts:
 *   delete:
 *     summary: Delete all posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: All posts deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 deletedPosts: { type: number }
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */
router.delete("/", async (req, res) => {
  res.status(200);
  return;
  try {
    const result = await Post.deleteMany({});
    res.json({ success: true, deletedPosts: result.deletedCount });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "서버 오류가 발생했습니다." });
  }
});

/**
 * @swagger
 * /posts/all-data:
 *   delete:
 *     summary: Delete all users and posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: All users and posts deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 deletedUsers: { type: number }
 *                 deletedPosts: { type: number }
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */
router.delete("/all-data", async (req, res) => {
  res.status(200);
  return;
  try {
    const [postResult, userResult] = await Promise.all([
      Post.deleteMany({}),
      User.deleteMany({}),
    ]);

    res.json({
      success: true,
      deletedUsers: userResult.deletedCount,
      deletedPosts: postResult.deletedCount,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "서버 오류가 발생했습니다." });
  }
});

// 수정
/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     summary: Update a post
 *     tags: [Posts]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title: { type: string }
 *               category: { type: string }
 *               thumbnail: { type: string, nullable: true }
 *               content: { type: string }
 *     responses:
 *       200:
 *         description: Updated post
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Post"
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 *       404:
 *         description: Post not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */
router.put("/:id", auth, async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post)
    return res.status(404).json({ error: "게시글을 찾을 수 없습니다." });
  if (!post.author.equals(req.user._id))
    return res.status(403).json({ error: "권한이 없습니다." });
  ["title", "category", "thumbnail", "content"].forEach((f) => {
    if (req.body[f] != null) post[f] = req.body[f];
  });
  await post.save();
  res.json(post);
});

// 삭제
/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Delete a post
 *     tags: [Posts]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 *       404:
 *         description: Post not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */
router.delete("/:id", auth, async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post)
    return res.status(404).json({ error: "게시글을 찾을 수 없습니다." });
  if (!post.author.equals(req.user._id))
    return res.status(403).json({ error: "권한이 없습니다." });
  await post.deleteOne();
  res.json({ success: true });
});

// 댓글 추가
/**
 * @swagger
 * /posts/{id}/comments:
 *   post:
 *     summary: Add a comment to a post
 *     tags: [Posts]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [content]
 *             properties:
 *               content: { type: string }
 *     responses:
 *       200:
 *         description: New comment
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Comment"
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 *       404:
 *         description: Post not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */
router.post("/:id/comments", auth, async (req, res) => {
  // await new Promise((r) => setTimeout(r, 2000)); // 인위적 지연

  // 1) Post 문서 찾기
  const post = await Post.findById(req.params.id);
  if (!post)
    return res.status(404).json({ error: "게시글을 찾을 수 없습니다." });

  // 2) 댓글 푸시
  post.comments.push({
    author: req.user._id,
    content: req.body.content,
  });

  // 3) 저장
  await post.save();

  // 4) 방금 추가한 comments.author 필드에 대해 populate
  await post.populate({
    path: "comments.author",
    select: "nickname profileImage", // 가져올 필드만 지정
  });

  // 5) 새로 추가된 댓글을 꺼내서 응답
  const newComment = post.comments[post.comments.length - 1];
  res.json(newComment);
});

// 댓글 삭제
/**
 * @swagger
 * /posts/{postId}/comments/{commentId}:
 *   delete:
 *     summary: Delete a comment
 *     tags: [Posts]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: commentId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 *       404:
 *         description: Comment or post not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */
router.delete("/:postId/comments/:commentId", auth, async (req, res) => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const post = await Post.findById(req.params.postId);
  if (!post)
    return res.status(404).json({ error: "게시글을 찾을 수 없습니다." });
  const comment = post.comments.id(req.params.commentId);
  if (!comment)
    return res.status(404).json({ error: "댓글을 찾을 수 없습니다." });
  if (!comment.author.equals(req.user._id))
    return res.status(403).json({ error: "권한이 없습니다." });
  comment.deleteOne();
  await post.save();
  res.json({ success: true });
});

// 시드용 카테고리 배열 (빈 문자열 제외)
const categories = [
  "Technology",
  "Lifestyle",
  "Travel",
  "Business",
  "Economy",
  "Sports",
];

// ▶ [POST] /posts/seed
// - 기존 포스트 전부 삭제
// - categories 당 36개씩 더미 포스트 삽입
/**
 * @swagger
 * /posts/seed:
 *   post:
 *     summary: Seed posts for development
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Seed completed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message: { type: string }
 *                 totalInserted: { type: number }
 *       400:
 *         description: No users
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */
router.post("/seed", async (req, res) => {
  try {
    // 1) 기존 모든 포스트 삭제
    await Post.deleteMany({});

    // 2) 전체 유저 목록(_id) 조회
    const users = await User.find().select("_id").lean();
    if (users.length === 0) {
      return res.status(400).json({ error: "등록된 유저가 없습니다." });
    }

    // 첫 번째 유저 ID 가져오기
    const firstUserId = users[0]._id;

    // 3) 삽입할 더미 문서 배열 생성
    const docs = categories.flatMap((category) => {
      return Array.from({ length: 36 }, () => ({
        title: faker.lorem.sentence(),
        category,
        thumbnail: `https://picsum.photos/seed/${faker.string.uuid()}/800/600`,
        content: faker.lorem.paragraphs(2),
        author: firstUserId, // 항상 첫 번째 유저
        comments: [],
      }));
    });

    // 4) bulk insert
    const inserted = await Post.insertMany(docs);

    res.json({
      message: "기존 포스트 삭제 후 더미 포스트 삽입 완료 (첫 번째 유저 기준)",
      totalInserted: inserted.length,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "서버 오류가 발생했습니다." });
  }
});

module.exports = router;
