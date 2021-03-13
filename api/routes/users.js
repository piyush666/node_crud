const express = require("express");
const Router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/user");
Router.get("/", (req, res, next) => {
  User.find({})
    .then((result) => {
      res.status(200).json({
        message: "user list",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
        error: err,
      });
    });
});

Router.post("/", (req, res, next) => {
  const user = new User({
    name: req.body.name,
    _id: mongoose.Types.ObjectId(),
    age: req.body.age,
  });
  user
    .save()
    .then((result) => {
      res.status(200).json({
        message: "user created",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
        error: err,
      });
    });
});

Router.patch("/:userId", (req, res, next) => {
  const newUser = {};
  Object.keys(req.body).forEach((key) => {
    newUser[key] = req.body[key];
  });

  User.updateOne(
    { _id: req.params.userId },
    {
      $set: newUser,
    }
  )
    .then((result) => {
      res.status(200).json({
        message: "user updated",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
        error: err,
      });
    });
});

Router.delete("/:userId", (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .then((result) => {
      res.status(200).json({
        message: "user deleted",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
        error: err,
      });
    });
});
module.exports = Router;
