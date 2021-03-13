const mongoose = require("mongoose");

const user = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: { type: String, require: true },
  age: Number,
});

module.exports = mongoose.model("User",user);
