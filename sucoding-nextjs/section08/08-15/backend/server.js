import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

app.use(async (req, res, next) => {
  // await sleep(2000); // 전체 지연
  next();
});

// -----------------------------
// In-memory DB (서버 재시작 시 초기화)
// -----------------------------

let posts = Array.from({ length: 30 }).map((_, i) => ({
  userId: (i % 5) + 1,
  id: i + 1,
  title: `Post ${i + 1}`,
  body: `This is the body of post ${i + 1}.`,
  liked: false, // ✅ 좋아요 여부 추가
}));

// -----------------------------
// Utils
// -----------------------------
function toInt(v, fallback) {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

// -----------------------------
// Health
// -----------------------------
app.get("/", (req, res) => {
  res.json({
    ok: true,
    endpoints: [
      "/posts",
      "/posts/:id",
      "/posts/:id/like", // ✅ 추가
    ],
  });
});

// -----------------------------
// Posts
// - GET /posts?_page=1&_limit=10
// - GET /posts/:id
// - PATCH /posts/:id/like
// -----------------------------

// 목록(+페이지네이션)
app.get("/posts", (req, res) => {
  const _page = Math.max(1, toInt(req.query._page, 1));
  const _limit = Math.max(1, toInt(req.query._limit, 10));

  const start = (_page - 1) * _limit;
  const end = start + _limit;

  res.set("X-Total-Count", String(posts.length));
  res.set("Access-Control-Expose-Headers", "X-Total-Count");

  res.json(posts.slice(start, end)); // ✅ liked 포함되어 내려감
});

// 상세
app.get("/posts/:id", async (req, res) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const id = toInt(req.params.id, NaN);
  const post = posts.find((p) => p.id === id);
  if (!post) return res.status(404).json({ error: "Post not found" });
  res.json(post); // ✅ liked 포함
});

// -----------------------------
// 좋아요 상태 업데이트 API
// Body 예시:
// 1) { "liked": true }   -> 명시적 업데이트
// 2) {} 또는 body 없음  -> 토글(toggle)
// -----------------------------
app.patch("/posts/:id/like", (req, res) => {
  const id = toInt(req.params.id, NaN);
  const post = posts.find((p) => p.id === id);
  if (!post) return res.status(404).json({ error: "Post not found" });

  // body에 liked가 오면 그 값으로 세팅, 없으면 토글
  const { liked } = req.body ?? {};
  if (typeof liked === "boolean") {
    post.liked = liked;
  } else {
    post.liked = !post.liked;
  }

  res.json({
    ok: true,
    id: post.id,
    liked: post.liked,
  });
});

// -----------------------------
// Start
// -----------------------------
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Fake JSONPlaceholder API running on http://localhost:${PORT}`);
});
