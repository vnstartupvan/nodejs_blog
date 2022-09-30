const Course = require('../models/Course');
const { multipleMongooseObj } = require('../utils/mongoose');
class HomeController {
    //[GET] /
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                courses = multipleMongooseObj(courses);
                res.render('home', { courses })
            })
            .catch(next)
    }
}

module.exports = new HomeController;