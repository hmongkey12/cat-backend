const express = require("express");
const userRouter = express();
const { userModel } = require("../models/users");

userRouter.get("/", userModel);
userRouter.post("/", userModel);

module.exports = {
  userRouter,
};
