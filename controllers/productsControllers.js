const ProductsModels = require("../models/productsModels")

const getAll = async function (req, res, next) {
    //Leer la base datos
    try {
      const documents = await ProductsModels.find({});
      res.status(200).json(documents);
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  };

  const getById = async function (req, res, next) {
    try {
      const document = await ProductsModels.findById(req.params.id);
      res.status(200).json(document);
    } catch (e) {
      next(e);
    }
  };

  const create = async function (req, res, next) {
    try {
      const { title, price, code, description, category } = req.body;
      const producto = new ProductsModels({
        title,
        price,
        code,
        description,
        category
      });
      const document = await producto.save();
      res.status(201).json(document);
    } catch (e) {
      next(e);
    }
  };

  const update = async function (req, res, next) {
    try {
      await ProductsModels.findByIdAndUpdate(req.params.id, req.body);
      res.status(204).json();
    } catch (e) {
      next(e);
    }
  };

  const deleteProducto = async function (req, res, next) {
    try {
      await ProductsModels.findByIdAndDelete(req.params.id);
      res.status(204).json();
    } catch (e) {
      next(e);
    }
  };
module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteProducto,
}
