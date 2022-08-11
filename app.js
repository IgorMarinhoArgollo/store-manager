const express = require('express');
const helmet = require('helmet');
const rescue = require('express-rescue');
const swaggerUi = require('swagger-ui-express');
const morgan = require('morgan');
const limiter = require('./middlewares/limiter');
require('dotenv').config();
const error = require('./middlewares/error');
const { salesRouter } = require('./routers/salesRouter');
const { productsRouter } = require('./routers/productsRouter');
const swaggerDocs = require('./swagger.json');

const app = express();
app.use(helmet());
app.use(limiter);
app.use(express.json());
app.use(morgan('common'));

app.use('/sales', rescue(salesRouter));
app.use('/products', rescue(productsRouter));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(error);

module.exports = app;
