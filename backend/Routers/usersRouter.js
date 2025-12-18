import express from "express";
import {
  getMyProfile,
  updateProfile,
  addSkill,
  deleteSkill,
  addExperience,
  updateExperience,
  deleteExperience,
  getPublicProfile,
  searchProfiles,
  getProfileAnalytics,
} from "../Controllers/usersApis/barrel.js"

import { authMiddleware } from "../Middlewares/authMiddleware.js";

const userRoutes = express.Router();

// =========================
// PRIVATE ROUTES (AUTH)
// =========================

// Get logged-in user's profile
userRoutes.get("/me", authMiddleware, getMyProfile);
userRoutes.get("/search", searchProfiles);
userRoutes.get(
  "/me/analytics",
  authMiddleware,
  getProfileAnalytics
);

// Update basic profile info
userRoutes.put("/me", authMiddleware, updateProfile);

// Skills
userRoutes.post("/me/skills", authMiddleware, addSkill);
userRoutes.delete("/me/skills/:skillId", authMiddleware, deleteSkill);

// Experience
userRoutes.post("/me/experience", authMiddleware, addExperience);
userRoutes.put(
  "/me/experience/:experienceId",
  authMiddleware,
  updateExperience
);
userRoutes.delete(
  "/me/experience/:experienceId",
  authMiddleware,
  deleteExperience
);

// =========================
// PUBLIC ROUTES
// =========================

// Public profile by username
userRoutes.get("/public/:username", getPublicProfile);

export default userRoutes;
