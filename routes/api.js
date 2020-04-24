const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((getWorkouts) => {
      res.json(getWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
  .limit(7)
    .then((getWorkoutsRange) => {
      res.json(getWorkoutsRange);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((postNewWorkout) => {
      res.json(postNewWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate({ _id: req.params.id })
    .then((updateWorkout) => {
      res.json(updateWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/api/workouts/:id", function (req, res) {
  Workout.remove({ _id: req.params.id }, (err, doc) => {
    if (err) throw err;
    res.json(doc);
  });
});

module.exports = router;
