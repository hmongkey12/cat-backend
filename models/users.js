//this will contain the logic to modify users, extract users, delete users, and input users into the database
const express = require("express");
const mongoose = require("mongoose");
const { userSchema } = require("../schemas/users");
const user = mongoose.model("user", userSchema);
const userModel = express();

userModel.get("/", async (req, res) => {
  const { hash } = req.query;
  const mongodb_url = `mongodb+srv://garfield:${process.env.MONGODB_PASSWORD}@cluster0.rbtm5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  await mongoose.connect(mongodb_url);
  const results = await user.find({ hash: hash });
  res.send(results);
});

userModel.post("/", async (req, res) => {
  const { hash } = req.query;
  await mongoose.connect(process.env.MONGODB_URL);
  const aUser = new user({ hash: hash, voted: false });
  aUser.save();
  res.status(201).end("success");
});

module.exports = {
  userModel,
};
