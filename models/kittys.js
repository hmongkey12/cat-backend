const mongoose = require("mongoose");

const kittySchema = new mongoose.Schema({
  name: String,
  vote: Number,
});

const kitty = mongoose.model("kitty", kittySchema);

module.exports = { kitty };
