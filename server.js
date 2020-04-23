const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const PORT = process.env.PORT || 3000;
const app = express();

const Workout = require("./models/workoutModel.js");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout",
    { useNewUrlParser: true }
  );

  app.use(morgan('dev', {
    skip: function (req, res) { return res.statusCode < 400 }
  }))

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});