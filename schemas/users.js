//This will contain the schema model for our users, and also update database

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  hash: String,
  voted: Boolean,
});

module.exports = { userSchema };
