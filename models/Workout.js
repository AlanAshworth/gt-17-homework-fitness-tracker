const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: String,
      trim: true,
      required: "Select workout type.",
    },
    {
      name: String,
      trim: true,
      required: "Enter your name.",
    },
    {
      duration: Number,
      required: true,
    },
    {
      weight: Number,
    },
    {
      reps: Number,
    },
    {
      sets: Number,
    },
    {
      distance: Number,
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
