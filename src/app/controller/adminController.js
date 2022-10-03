const Course = require('../models/Course');
const { multipleMongooseObj, mongooseObj } = require('../utils/mongoose');

class AdminController {
    //[GET] 
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                courses = multipleMongooseObj(courses);
                res.render('admin', { courses });
            })
            .catch(next)
    }
}

module.exports = new AdminController;