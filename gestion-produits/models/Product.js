const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  reference: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  quantity: { type: Number, default: 0 },
  category: { type: String },
  supplier: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Product", ProductSchema);
