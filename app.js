require('dotenv').config();
const express = require('express');
const error = require('./middlewares/error');

const app = express();
app.use(express.json());

app.use(error);

module.exports = app;
