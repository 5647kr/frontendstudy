import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// 10 ~ 2000 (10 단위)
function getRandomByTen() {
  return (Math.floor(Math.random() * 200) + 1) * 10;
}

app.get("/random1", (req, res) => {
  const randomNumber = getRandomByTen();
  console.log(`The generated random1 number is ${randomNumber}`);
  res.json(randomNumber);
});

app.get("/random2", (req, res) => {
  const randomNumber = getRandomByTen();
  console.log(`The generated random2 number is ${randomNumber}`);
  res.json(randomNumber);
});

app.get("/random3", (req, res) => {
  const randomNumber = getRandomByTen();
  console.log(`The generated random3 number is ${randomNumber}`);
  res.json(randomNumber);
});

app.get("/random4", (req, res) => {
  const randomNumber = getRandomByTen();
  console.log(`The generated random4 number is ${randomNumber}`);
  res.json(randomNumber);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
