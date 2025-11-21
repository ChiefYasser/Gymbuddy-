import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const MODEL = "meta-llama/Llama-3.1-8B-Instruct";
const HF_API = `https://router.huggingface.co/hf-inference/models/${MODEL}`;

export default {
  generateWorkoutPlan: async (goal, level, duration) => {
    const prompt = `
      Create a detailed workout plan:
      - Goal: ${goal}
      - Level: ${level}
      - Duration: ${duration} minutes
    `;

    const response = await axios.post(
      HF_API,
      { inputs: prompt },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.generated_text || response.data;
  },

  generateMealPlan: async (calories, diet) => {
    const prompt = `
      Create a meal plan:
      - Calories per day: ${calories}
      - Diet Type: ${diet}
    `;

    const response = await axios.post(
      HF_API,
      { inputs: prompt },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.generated_text || response.data;
  },

  askAI: async (message) => {
    const response = await axios.post(
      HF_API,
      { inputs: message },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.generated_text || response.data;
  },
};
