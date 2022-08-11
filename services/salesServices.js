const { salesModel } = require('../models');

const allSales = async () => {
  const result = await salesModel.allSales();
  return result;
};

const saleById = async (id) => {
  const result = await salesModel.saleById(id);
  if (!result.length) {
    return ({ code: 404, message: 'Sale not found' });
  }
  return result;
};

const createSale = async (arr) => {
  const result = await salesModel.createSale(arr);
  return result;
};

const deleteSale = async (id) => {
  let result = await saleById(id);
  if (result.code) {
    return result;
  }
  result = await salesModel.deleteSale(id);
  return result;
};

const updateSale = async (id, arr) => {
  const result = await salesModel.saleById(id);
  if (result.length === 0) {
    return { code: 404, message: 'Sale not found' };
  }
  await Promise.all(arr.map(async (element) => {
    await salesModel.updateSale(element.quantity, id, element.productId);
  }));
  return {
    saleId: Number(id),
    itemsSold: result,
  };
};

module.exports = {
  allSales,
  saleById,
  createSale,
  deleteSale,
  updateSale,
};
