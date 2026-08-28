// server.js
import express from "express";
import cors from "cors";
import { teamMembers } from "./data/teamMember.js";

const app = express();

app.use(cors());
app.use(express.json());

/**
 * GET /team-members
 * - 전체 팀원 목록 조회
 */
app.get("/team-members", (req, res) => {
  res.json({
    ok: true,
    count: teamMembers.length,
    data: teamMembers,
  });
});

/**
 * GET /team-members/search?q=keyword
 * - 이름/이메일 부분일치 검색 (case-insensitive)
 * - q가 없거나 빈 문자열이면 빈 배열 반환(원하면 전체 반환으로 바꿔도 됨)
 */
app.get("/team-members/search", async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const q = String(req.query.q ?? "")
    .trim()
    .toLowerCase();

  const filtered = teamMembers.filter((m) => {
    const name = m.name.toLowerCase();
    return name.includes(q);
  });

  res.json({
    ok: true,
    count: filtered.length,
    data: filtered,
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Team API running on http://localhost:${PORT}`);
});
