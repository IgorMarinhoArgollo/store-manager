const express = require('express');
const { productsController } = require('../controllers');

const productsRouter = express.Router();

productsRouter.get('/', productsController.allProducts);
productsRouter.get('/search', productsController.queryProductByName);
productsRouter.get('/:id', productsController.productById);
productsRouter.post('/', productsController.postProduct);
productsRouter.put('/:id', productsController.updateProduct);
productsRouter.delete('/:id', productsController.deleteProduct);

module.exports = {
  productsRouter,
};
