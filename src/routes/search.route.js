const express = require('express');
const route = express.Router();
const searchController = require('../app/controller/SearchController');


route.use('/search', searchController.index);

module.exports = route;