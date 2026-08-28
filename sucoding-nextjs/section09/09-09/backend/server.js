const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// -----------------------------
// In-memory DB (서버 재시작 시 초기화)
// -----------------------------
let nextId = 1;
// 초기 시드 데이터
// 필요 없으면 지우기
let todos = [];

// -----------------------------
// 헬스 체크
// -----------------------------
app.get("/", (req, res) => {
  res.json({ ok: true, message: "TODO API running" });
});

// -----------------------------
// 목록 조회 (옵션)
// GET /todos
// -----------------------------
app.get("/todos", (req, res) => {
  res.json({ data: todos });
});

// -----------------------------
// 등록
// POST /todos
// body: { "title": "..." }
// -----------------------------
app.post("/todos", async (req, res) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const { title } = req.body ?? {};
  if (typeof title !== "string" || title.trim().length === 0) {
    return res
      .status(400)
      .json({ message: "title은 비어있지 않은 문자열이어야 합니다." });
  }

  const todo = {
    id: nextId++,
    title: title.trim(),
    completed: false,
    createdAt: new Date().toISOString(),
  };

  todos.push(todo);
  return res.status(201).json({ message: "등록 성공", data: todo });
});

// -----------------------------
// 수정 (전체 수정)
// PUT /todos/:id
// body: { "title": "...", "completed": true/false(optional) }
// -----------------------------
app.put("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isFinite(id))
    return res.status(400).json({ message: "id가 올바르지 않습니다." });

  const idx = todos.findIndex((t) => t.id === id);
  if (idx === -1)
    return res.status(404).json({ message: "해당 todo를 찾을 수 없습니다." });

  const { title, completed } = req.body ?? {};

  if (title !== undefined) {
    if (typeof title !== "string" || title.trim().length === 0) {
      return res
        .status(400)
        .json({ message: "title은 비어있지 않은 문자열이어야 합니다." });
    }
    todos[idx].title = title.trim();
  }

  if (completed !== undefined) {
    if (typeof completed !== "boolean") {
      return res
        .status(400)
        .json({ message: "completed는 boolean 이어야 합니다." });
    }
    todos[idx].completed = completed;
  }

  return res.json({ message: "수정 성공", data: todos[idx] });
});

// -----------------------------
// 할일 완료/해제 (토글)
// PATCH /todos/:id/toggle
// -----------------------------
app.patch("/todos/:id/toggle", async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const id = Number(req.params.id);
  if (!Number.isFinite(id))
    return res.status(400).json({ message: "id가 올바르지 않습니다." });

  const todo = todos.find((t) => t.id === id);
  if (!todo)
    return res.status(404).json({ message: "해당 todo를 찾을 수 없습니다." });

  todo.completed = !todo.completed;
  return res.json({ message: "완료 상태 변경", data: todo });
});

// -----------------------------
// (대안) 완료 상태를 명시적으로 변경
// PATCH /todos/:id
// body: { "completed": true }
// -----------------------------
app.patch("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isFinite(id))
    return res.status(400).json({ message: "id가 올바르지 않습니다." });

  const todo = todos.find((t) => t.id === id);
  if (!todo)
    return res.status(404).json({ message: "해당 todo를 찾을 수 없습니다." });

  const { completed } = req.body ?? {};
  if (typeof completed !== "boolean") {
    return res
      .status(400)
      .json({ message: "completed는 boolean 이어야 합니다." });
  }

  todo.completed = completed;
  return res.json({ message: "완료 상태 변경", data: todo });
});

// -----------------------------
// 삭제
// DELETE /todos/:id
// -----------------------------
app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isFinite(id))
    return res.status(400).json({ message: "id가 올바르지 않습니다." });

  const before = todos.length;
  todos = todos.filter((t) => t.id !== id);

  if (todos.length === before) {
    return res.status(404).json({ message: "해당 todo를 찾을 수 없습니다." });
  }

  return res.json({ message: "삭제 성공" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`TODO API listening on http://localhost:${PORT}`);
});
