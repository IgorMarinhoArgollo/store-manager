const connection = require('./connection');

const allSales = async () => {
  const result = await connection.execute(
    `SELECT sp.sale_id AS saleId,
    s.date,
    sp.product_id AS productId,
    sp.quantity

    FROM StoreManager.sales AS s
    JOIN StoreManager.sales_products AS sp

    ON s.id = sp.sale_id ORDER BY sp.product_id ASC;`,
  );
  return result[0];
};

const saleById = async (id) => {
  const result = await connection.execute(
    `SELECT s.date,
      sp.product_id AS productId,
      sp.quantity

      FROM StoreManager.sales AS s
      JOIN StoreManager.sales_products AS sp

      ON s.id = sp.sale_id AND sp.sale_id = ?;`,
    [id],
  );
  return result[0];
};

const createSaleOnSale = async () => {
  const [result] = await connection.execute(
    `INSERT INTO StoreManager.sales (date) VALUES
    (NOW());`,
  );
  return result.insertId;
};

const createSaleOnSalesProduct = async (idResult, element) => {
  await connection.execute(
    `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) 
        VALUES (?, ?, ?);`,
    [idResult, element.productId, element.quantity],
  );
  const { productId, quantity } = element;
  return {
    productId,
    quantity,
  };
};

const createSale = async (arr) => {
  const idResult = await createSaleOnSale();
  const result = {
    id: await idResult,
    itemsSold: [],
  };

  const reduce = arr.map(async (element) => {
    result.itemsSold.push(await createSaleOnSalesProduct(idResult, element));
  });
  await Promise.all(reduce);
  return result;
};

const deleteSale = async (id) => {
  await connection.execute('DELETE FROM StoreManager.sales WHERE id = ?', [id]);
  return { status: 'ok' };
};

const updateSale = async (quantity, saleId, productId) => {
  await connection.execute(`UPDATE StoreManager.sales_products 
    SET quantity = ? 
    WHERE sale_id = ?
    AND product_id = ?`, [quantity, saleId, productId]);
};

module.exports = {
  allSales,
  saleById,
  createSale,
  deleteSale,
  updateSale,
};
