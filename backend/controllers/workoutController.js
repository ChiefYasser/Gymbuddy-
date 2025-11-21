import WorkoutLog from "../models/WorkoutLog.js";
import aiService from "../services/aiService.js";

export const createWorkoutLog = async (req, res, next) => {
  try {
    const { userId, exercises, duration } = req.body;

    const log = await WorkoutLog.create({
      user: userId,
      exercises,
      duration
    });

    res.status(201).json({ message: "Workout log saved", log });
  } catch (err) {
    next(err);
  }
};

export const getUserWorkouts = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const logs = await WorkoutLog.find({ user: userId }).sort({ createdAt: -1 });

    res.status(200).json(logs);
  } catch (err) {
    next(err);
  }
};

export const generateAIWorkout = async (req, res, next) => {
  try {
    const { goal, level, duration } = req.body;

    const plan = await aiService.generateWorkoutPlan(goal, level, duration);

    res.status(200).json({ plan });
  } catch (err) {
    next(err);
  }
};
