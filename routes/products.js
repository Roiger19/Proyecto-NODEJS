var express = require('express');
var router = express.Router();

const productsControllers = require("../controllers/productsControllers");
/* GET products listing. */
router.get('/', productsControllers.getAll);

// GET - Obtener un Producto
router.get('/:id', productsControllers.getById);

// POST - Crear un producto
router.post('/', productsControllers.create);

// PUT - Actualizar producto
router.put('/:id', productsControllers.update);

// DELETE - Eliminar producto
router.delete('/:id', productsControllers.deleteProducto);





module.exports = router;
