const { salesService } = require('../services');

const allSales = async (_req, res, next) => {
  try {
    const result = await salesService.allSales();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const saleById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await salesService.saleById(id);
    if (result.code) {
      return res.status(result.code).json({ message: result.message });
    }
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const createSale = async (req, res, next) => {
  try {
    const arr = req.body;
    const result = await salesService.createSale(arr);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const updateSale = async (req, res, next) => {
  try {
    const { id } = req.params;
    const arr = req.body;
    const result = await salesService.updateSale(id, arr);
    if (result.code) {
      return res.status(result.code).json({ message: result.message });
    }
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const deleteSale = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await salesService.deleteSale(id);
    if (result.code) {
      return res.status(result.code).json({ message: result.message });
    }
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  allSales,
  saleById,
  createSale,
  updateSale,
  deleteSale,
};
