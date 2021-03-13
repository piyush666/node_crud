const express = require("express");
const bodyParser = require("body-parser");
const UserRoute = require("./api/routes/users");

const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/test");
app.use(bodyParser.json());
app.use("/user", UserRoute);
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "somthing went wrong",
    error: err,
  });
});

module.exports = app;
