const { productsService } = require('../services');

const allProducts = async (_req, res, next) => {
  try {
    const products = await productsService.allProducts();
    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

const productById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await productsService.productById(id);
    if (result.code) {
      return res.status(result.code).json({ message: result.message });
    }
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const postProduct = async (req, res, next) => {
  try {
    const { name } = req.body;
    const result = await productsService.postProduct(name);
    if (result.code) {
      return res.status(result.code).json({ message: result.message });
    }
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await productsService.deleteProduct(id);
    if (result.code) {
      return res.status(result.code).json({ message: result.message });
    }
    return res.status(204);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const result = await productsService.putProduct(id, name);
    if (result.code) {
      return res.status(result.code).json({ message: result.message });
    }
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const queryProductByName = async (req, res, next) => {
  try {
    const { q } = req.query;
    const result = await productsService.queryProducts(q);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  allProducts,
  productById,
  postProduct,
  deleteProduct,
  updateProduct,
  queryProductByName,
};
