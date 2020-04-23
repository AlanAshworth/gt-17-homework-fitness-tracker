const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/workouts", (req,res) => {
    db.Workout.find({})
    .then(workouts => {
        console.log(workouts);
        res.json(workouts);
    })
    .catch( err => {
        console.log(err);
        res.json(err);
    })
});

module.exports = router;