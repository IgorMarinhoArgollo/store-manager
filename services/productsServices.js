const { productsModel } = require('../models');

const allProducts = async () => {
  const result = await productsModel.allProducts();
  return result;
};

const productById = async (id) => {
  const result = await productsModel.productById(id);
  if (!result.length) {
    return ({ code: 404, message: 'Product not found' });
  }
  return result[0];
};

const postProduct = async (name) => {
  if (!name) {
    return ({ code: 400, message: '"name" is required' });
  }
  if (name.length < 5) {
    return ({ code: 422, message: '"name" length must be at least 5 characters long' });
  }
  const result = await productsModel.postProduct(name);
  return result;
};

const deleteProduct = async (id) => {
  let result = await productsModel.productById(id);
  if (!result.length) {
    return ({ code: 404, message: 'Product not found' });
  }
  result = productsModel.deleteProduct(id);
  return (result);
};

const putProduct = async (id, name) => {
  if (!name) {
    return ({ code: 400, message: '"name" is required' });
  }
  if (name.length < 5) {
    return ({ code: 422, message: '"name" length must be at least 5 characters long' });
  }
  let result = await productsModel.productById(id);
  if (!result.length) {
    return ({ code: 404, message: 'Product not found' });
  }
  result = await productsModel.putProduct(id, name);
  return result;
};

const queryProducts = async (q) => {
  const result = await productsModel.queryProducts(q);
  return result;
};

module.exports = {
  allProducts,
  productById,
  postProduct,
  deleteProduct,
  putProduct,
  queryProducts,
};
