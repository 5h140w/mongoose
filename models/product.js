// import mongoose
const mongoose = require("mongoose");

// create a schema
const productSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true, required: true },
    description: { type: String, required: true },
    prix: { type: Number, default: 10 },
    date_creation: { type: Date },
  },
  {
    timestamps: true,
  }
);

//create model => collection
module.exports = mongoose.model("product", productSchema);
