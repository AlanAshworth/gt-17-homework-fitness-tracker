const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const PORT = process.env.PORT || 3000;
const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(morgan("dev"));

const workoutRoutes = require("./controllers/workoutController.js");
const htmlRoutes = require("./controllers/htmlController.js");

app.use(workoutRoutes);
app.use(htmlRoutes);

app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
