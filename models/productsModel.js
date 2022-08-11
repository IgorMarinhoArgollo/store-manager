const connection = require('./connection');

const allProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id ASC;',
  );
  return result;
};

const productById = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?;',
    [id],
  );
  return result;
};

const postProduct = async (name) => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?);',
    [name],
  );
  return {
    id: result.insertId,
    name,
  };
};

const deleteProduct = async (id) => {
  await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?;',
    [id],
  );
  return ({ code: 204 });
};

const putProduct = async (id, name) => {
  await connection.execute(
    `UPDATE StoreManager.products
      SET name = ?
      WHERE id = ?;`,
    [name, id],
  );
  return {
    id,
    name,
  };
};

const queryProducts = async (q) => {
  const result = await connection.execute(
    `
  SELECT *
  FROM StoreManager.products
  WHERE name 
  LIKE CONCAT("%", ? , "%")`,
    [q],
  );
  return result[0];
};

module.exports = {
  allProducts,
  productById,
  postProduct,
  deleteProduct,
  putProduct,
  queryProducts,
};
