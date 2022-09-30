const Course = require('../models/Course');
const { multipleMongooseObj, mongooseObj } = require('../utils/mongoose');
class CoursesController {
    //[GET] /
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('course', { course: mongooseObj(course) });
            })
            .catch(next)
    }
}

module.exports = new CoursesController;