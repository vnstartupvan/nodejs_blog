const express = require('express');
const route = express.Router();
const coursesController = require('../app/controller/CoursesController');


route.get('/courses/create', coursesController.create);
route.post('/courses/store', coursesController.store);
route.get('/courses/:slug', coursesController.show);

module.exports = route;