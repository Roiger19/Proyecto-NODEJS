const mongoose = require("../config/mongodb");
const bcrypt = require("bcrypt");

//Crear schema
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String
});

//middleware
userSchema.pre("save", function(next){
  this.password = bcrypt.hashSync(this.password, 8);
  next();
});

//Crear modelo
module.exports = mongoose.model("usuarios", userSchema);
