import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { requireRole } from "../middleware/roleMiddleware.js";
import {
  createExercise,
  getExercises,
  deleteExercise
} from "../controllers/exerciseController.js";

const router = express.Router();

router.get("/", authMiddleware, getExercises);
router.post("/", authMiddleware, requireRole("admin"), createExercise);
router.delete("/:id", authMiddleware, requireRole("admin"), deleteExercise);

export default router;
