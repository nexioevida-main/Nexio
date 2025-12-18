import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { swaggerSetup } from "./MongoDB/swagger.js";
import connectDB from "./MongoDB/mongoDB.js";
import authRoutes from "./Routers/authRouter.js";
import userRoutes from "./Routers/usersRouter.js";
import publicRoutes from "./Routers///publicRoutes.js"
import adminRoutes from "./Routers/adminRoutes.js";
import { errorHandler } from "./Middlewares/errorMiddleware.js";
import validateEnv from "./MongoDB/validateEnv.js";

dotenv.config();
validateEnv();

const app = express();

// =====================
// MIDDLEWARES
// =====================
app.use(
  cors({
    origin: "http://localhost:3000", // frontend URL
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(errorHandler);

// Swagger Docs
// app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// =====================
// ROUTES
// =====================
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/public", publicRoutes);

swaggerSetup(app);


// =====================
// HEALTH CHECK
// =====================
app.get("/", (req, res) => {
  res.send("🚀 Job Seeker Visibility API is running");
});

// =====================
// SERVER + DB
// =====================
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🔥 Server running on port ${PORT}`);
  });
});
