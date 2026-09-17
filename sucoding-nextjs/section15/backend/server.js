require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const swaggerUi = require("swagger-ui-express");

const { initDB } = require("./config/db");
const corsMiddleware = require("./middlewares/cors");
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/posts");
const swaggerSpec = require("./utils/swagger");

const app = express();
initDB(); // MongoDB 연결

// const RESPONSE_DELAY_MS = parseInt(process.env.RESPONSE_DELAY_MS, 10) || 3000;
// app.use((req, res, next) => {
//   setTimeout(next, RESPONSE_DELAY_MS);
// });

app.set("trust proxy", true);
app.use(corsMiddleware);
app.use(express.json());
app.use(cookieParser());

// Swagger UI
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 라우트 등록
app.use("/auth", authRoutes);
app.use("/posts", postRoutes);

// "/" 경로 등록: 브라우저에 HELLO 출력
app.get("/", (_, res) => {
  res.send("INFLEARN NEXT FINAL BLOG");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
