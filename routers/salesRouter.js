const express = require('express');
const { salesController } = require('../controllers');

const salesRouter = express.Router();

salesRouter.get('/', salesController.allSales);
salesRouter.get('/:id', salesController.saleById);
salesRouter.post('/', salesController.createSale);
salesRouter.put('/:id', salesController.updateSale);
salesRouter.delete('/:id', salesController.deleteSale);

module.exports = {
  salesRouter,
};
