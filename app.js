const express = require('express');
const helmet = require('helmet');
// const rescue = require('express-rescue');
const limiter = require('./middlewares/limiter');
require('dotenv').config();
const error = require('./middlewares/error');

const app = express();
app.use(helmet());
app.use(limiter);
app.use(express.json());

app.use(error);

module.exports = app;
