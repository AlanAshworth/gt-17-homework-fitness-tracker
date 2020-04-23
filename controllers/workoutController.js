const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((workouts) => {
      console.log(workouts);
      res.json(workouts);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then((newWorkout) => {
      res.json(newWorkout);
    })
    .catch((err) => {
      res.status(500);
      res.json(err);
    });
});

module.exports = router;
