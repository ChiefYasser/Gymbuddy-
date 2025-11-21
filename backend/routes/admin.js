import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { requireRole } from "../middleware/roleMiddleware.js";
import {
  getStats,
  listUsers
} from "../controllers/adminController.js";

const router = express.Router();

router.get("/stats", authMiddleware, requireRole("admin"), getStats);
router.get("/users", authMiddleware, requireRole("admin"), listUsers);

export default router;
