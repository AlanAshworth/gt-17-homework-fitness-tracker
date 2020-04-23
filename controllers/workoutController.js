const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((getWorkouts) => {
      console.log(getWorkouts);
      res.json(getWorkouts);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((getWorkoutsRange) => {
      res.json(getWorkoutsRange);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then((postNewWorkout) => {
      res.json(postNewWorkout);
    })
    .catch((err) => {
      res.status(500);
      res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate({ _id: req.params.id })
    .then((updateWorkout) => {
      res.json(updateWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
