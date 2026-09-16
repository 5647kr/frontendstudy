import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// 모든 요청에 2초 지연
app.use((req, res, next) => {
  setTimeout(() => {
    next();
  }, 2000);
});

// 10 ~ 990 (10 단위)
function getRandomByTen() {
  return Math.floor(Math.random() * 99 + 1) * 10;
}

app.get("/random1", (req, res) => {
  const randomNumber = getRandomByTen();
  res.json(randomNumber);
});

app.get("/random2", (req, res) => {
  const randomNumber = getRandomByTen();
  res.json(randomNumber);
});

app.get("/random3", (req, res) => {
  const randomNumber = getRandomByTen();
  res.json(randomNumber);
});

app.get("/random4", (req, res) => {
  const randomNumber = getRandomByTen();
  res.json(randomNumber);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
