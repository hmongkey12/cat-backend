const express = require("express");
const mongoose = require("mongoose");
const { user } = require("../models/users");
const { kitty } = require("../models/kittys");
const controllerRouter = express();
const mongodb_url = process.env.MONGODB_URL;

controllerRouter.get("/", async (req, res) => {
  const { cat } = req.query;
  await mongoose.connect(mongodb_url);
  const results = await kitty.find({ name: cat });
  res.send(results);
});

controllerRouter.post("/", async (req, res) => {
  const { hash, cat } = req.query;
  await mongoose.connect(mongodb_url);
  const locatedUser = await user.find({ hash: hash });
  if (locatedUser.length !== 0) {
    res.status(200).end("User already voted");
  } else {
    const aUser = new user({ hash: hash });
    aUser.save();
    const locatedKitty = await kitty.findOne({ name: cat });
    if (!locatedKitty) {
      const aKitty = new kitty({ name: cat, vote: 1 });
      aKitty.save();
    } else {
      locatedKitty.vote += 1;
      locatedKitty.save();
    }
    res.status(201).end("success");
  }
});

module.exports = {
  controllerRouter,
};
