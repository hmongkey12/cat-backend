const express = require("express");
const middleRouter = express();
const { controllerRouter } = require("../controllers/controller");

middleRouter.get("/", controllerRouter);
middleRouter.post("/", controllerRouter);

module.exports = {
  middleRouter,
};
