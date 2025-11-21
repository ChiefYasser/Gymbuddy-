import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  logWorkout,
  getUserWorkouts
} from "../controllers/workoutController.js";

const router = express.Router();

router.post("/", authMiddleware, logWorkout);
router.get("/", authMiddleware, getUserWorkouts);

export default router;
