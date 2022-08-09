require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const error = require('./middlewares/error');

const app = express();
app.use(helmet());
app.use(express.json());

app.use(error);

module.exports = app;
