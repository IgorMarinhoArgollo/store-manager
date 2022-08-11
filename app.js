const express = require('express');
const helmet = require('helmet');
const rescue = require('express-rescue');
const limiter = require('./middlewares/limiter');
require('dotenv').config();
const error = require('./middlewares/error');
const { salesRouter } = require('./routers/salesRouter');
const { productsRouter } = require('./routers/productsRouter');

const app = express();
app.use(helmet());
app.use(limiter);
app.use(express.json());

app.use('/sales', rescue(salesRouter));
app.use('/products', rescue(productsRouter));

app.use(error);

module.exports = app;
