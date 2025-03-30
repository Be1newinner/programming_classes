const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  price: { type: Number, required: true },
  mrp: { type: Number, required: true },
  desc: String,
  faqs: [
    {
      question: String,
      answer: String,
    },
  ],
  sku: { type: String, unique: true, required: true },
  stock: { type: Number, required: true, default: 0 },
}, {
  autoIndex: true
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
