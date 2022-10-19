const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: String,
    password: String,
  },
  { timestamps: true }
);

module.exports = mongoose.models.User || model("User", userSchema);
