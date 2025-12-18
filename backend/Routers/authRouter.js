import express from "express";
import {
  logginIn,
  googleAuth,
  passwordResetRequest,
  passwordReset,
  logout,
} from "../controllers/authApis/authController.js";

const authRoutes = express.Router();

authRoutes.post("/login", logginIn);
authRoutes.post("/google", googleAuth);
authRoutes.post("/password-reset-request", passwordResetRequest);
authRoutes.post("/password-reset", passwordReset);
authRoutes.post("/logout", logout);

export default authRoutes;
