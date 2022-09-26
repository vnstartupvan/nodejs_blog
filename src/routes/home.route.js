const express = require('express');
const route = express.Router();
const homeController = require('../app/controller/HomeController');


route.use('/', homeController.index);

module.exports = route;