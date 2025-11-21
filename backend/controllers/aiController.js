import aiService from "../services/aiService.js";

export const generateWorkoutPlan = async (req, res) => {
  try {
    const { goal, level, duration } = req.body;

    if (!goal || !level || !duration) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const result = await aiService.generateWorkoutPlan(goal, level, duration);
    res.json({ plan: result });
  } catch (error) {
    console.error("AI Controller Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const generateMealPlan = async (req, res) => {
  try {
    const { calories, diet } = req.body;

    if (!calories || !diet) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const result = await aiService.generateMealPlan(calories, diet);
    res.json({ mealplan: result });
  } catch (error) {
    console.error("AI Controller Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const askAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const reply = await aiService.askAI(message);
    res.json({ reply });
  } catch (error) {
    console.error("AI Controller Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
