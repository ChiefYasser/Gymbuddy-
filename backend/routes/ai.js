import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  generateWorkout,
  getMotivation
} from "../controllers/aiController.js";

const router = express.Router();

router.post("/workout", authMiddleware, generateWorkout);
router.get("/motivation", authMiddleware, getMotivation);

export default router;
