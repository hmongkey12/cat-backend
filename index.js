require("dotenv").config();
const express = require("express");
const server = express();
const PORT = process.env.PORT || 3000;

const { userRouter } = require("./controllers/users");

server.use("/users", userRouter);

server.listen(PORT | pro, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server listening on PORT", PORT);
  }
});
