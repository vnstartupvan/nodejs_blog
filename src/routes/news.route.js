const express = require('express');
const route = express.Router();

const newsController = require('../app/controller/NewsController');
route.use('/news/:slug', newsController.show);
route.use('/news', newsController.index);



module.exports = route;