const mongoose = require("mongoose");

const AIRequestSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: ["workout_suggestion", "motivation", "nutrition_tip"],
      required: true,
    },
    inputData: {
      type: Object,
      required: true,
    },
    response: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("AIRequest", AIRequestSchema);