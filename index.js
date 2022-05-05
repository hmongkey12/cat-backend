require("dotenv").config();
const express = require("express");
const server = express();
const PORT = process.env.PORT || 3000;

const { middleRouter } = require("./middlewares/middleware");

server.use("/users", middleRouter);

server.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server listening on PORT", PORT);
  }
});
