/* eslint-disable no-unused-vars */
const error = (err, _req, res, _next) => {
  console.log(err);
  return res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
};

module.exports = error;
