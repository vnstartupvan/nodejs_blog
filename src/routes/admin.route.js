const express = require('express');
const route = express.Router();
const coursesController = require('../app/controller/AdminController');


route.get('/courses/admin', coursesController.index);


module.exports = route;