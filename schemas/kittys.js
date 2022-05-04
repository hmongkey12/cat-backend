const mongoose = require("mongoose");

const kittySchema = new mongoose.Schema({
  sylvester: Number,
  catInTheHat: Number,
});

module.exports = { kittySchema };
