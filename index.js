const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./src/models/user");
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/createUser", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({
      email,
      password,
    });

    const returnData = await newUser.save();
    res.send(returnData);
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
});

app.get("/getUsers", async (req, res) => {
  try {
    const user = await User.find();
    res.send(user);
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
});

app.get("/getUser/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    res.send(user);
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
});

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
    return app.listen(process.env.PORT, () =>
      console.log(`Server connected on port ${process.env.PORT}`)
    );
  });
