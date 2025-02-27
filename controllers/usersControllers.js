const UsersModels = require("../models/usersModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const create = async function (req, res, next) {
  try {
    const { name, email, password } = req.body;
    const producto = new UsersModels({
      name,
      email,
      password
    });
    const document = await producto.save();
    res.status(201).json(document);
  } catch (e) {
     next(e);
   }
 };

 const login = async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await UsersModels.findOne({email})
    if(!user){
      return res
      .status(400)
      .json({message: "Usuario y/o contraseña incorrectos"})
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return res
      .status(400)
      .json({ message: "Email y/o contraseña incorrectos"});
    }
    const token = jwt.sign({userId: user._id }, "123", {expiresIn: "1h" });
    res.status(200).json(token);
  } catch (e) {
     next(e);
   }
 }; 

module.exports = {
    create,
    login
}
