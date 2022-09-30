const express = require('express');
const route = express.Router();
const coursesController = require('../app/controller/CoursesController');

route.use('/courses/:slug', coursesController.show);

module.exports = route;