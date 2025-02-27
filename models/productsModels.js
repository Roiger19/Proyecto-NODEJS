const mongoose = require("../config/mongodb");

//Crear schema
const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  code: Number,
  description: {
    type: String,
    required: true,
    maxlength: 1000,
  },
  category: String
});

//Crear modelo
module.exports = mongoose.model("productos", productSchema);
