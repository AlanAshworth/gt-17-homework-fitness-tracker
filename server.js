const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;
const app = express();

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(logger("dev"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const apiController = require("./controllers/apiController");
const viewController = require("./controllers/viewController");
app.use(apiController);
app.use(viewController);

app.listen(PORT, () => {
  console.log(`App listening on: http://localhost:${PORT}`);
});
