import User from "../models/User.js";
import WorkoutLog from "../models/WorkoutLog.js";

export const getStats = async (req, res, next) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalWorkouts = await WorkoutLog.countDocuments();
    
    res.status(200).json({
      totalUsers,
      totalWorkouts
    });
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    await User.findByIdAndDelete(id);
    
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    next(err);
  }
};