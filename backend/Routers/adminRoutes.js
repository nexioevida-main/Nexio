import express from "express";
import {
  getAllUsers,
  suspendUser,
  unsuspendUser,
} from "../controllers/adminApis/barrel.js";

import {
  authMiddleware,
  adminMiddleware,
} from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.get("/users", authMiddleware, adminMiddleware, getAllUsers);

router.put(
  "/users/:userId/suspend",
  authMiddleware,
  adminMiddleware,
  suspendUser
);

router.put(
  "/users/:userId/unsuspend",
  authMiddleware,
  adminMiddleware,
  unsuspendUser
);

export default router;
