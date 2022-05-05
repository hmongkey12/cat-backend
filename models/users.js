//This will contain the schema model for our users, and also update database

const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  hash: String,
});
const user = mongoose.model("user", schema);

module.exports = { user };
