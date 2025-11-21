import Exercise from "../models/Exercise.js";

export const getAllExercises = async (req, res, next) => {
  try {
    const exercises = await Exercise.find({});
    res.status(200).json(exercises);
  } catch (err) {
    next(err);
  }
};

export const addExercise = async (req, res, next) => {
  try {
    const { name, muscle, equipment, difficulty } = req.body;
    
    const exercise = await Exercise.create({
      name,
      muscle,
      equipment,
      difficulty
    });

    res.status(201).json({ message: "Exercise added", exercise });
  } catch (err) {
    next(err);
  }
};