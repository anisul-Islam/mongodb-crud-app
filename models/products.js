// 2. create a schema and model
const mongoose = require("mongoose");
const productsSchema = new mongoose.Schema({
  id: String,
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Product = mongoose.model("Products", productsSchema);
module.exports = Product;
