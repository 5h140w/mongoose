// import mongoose
const mongoose = require("mongoose");

// create a schema
const userSchema = new mongoose.Schema({
  name: { type: String },
});

//create model => collection
module.exports = mongoose.model("user", userSchema);
