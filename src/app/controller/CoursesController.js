const Course = require('../models/Course');
const { multipleMongooseObj, mongooseObj } = require('../utils/mongoose');

class CoursesController {
    //[GET] 
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                console.log(mongooseObj(course), req.params.slug)
                res.render('course', { course: mongooseObj(course) });
            })
            .catch(next)
    }
    //[GET] 
    create(req, res, next) {
        res.render('create')
    }
    //[POST] 
    store(req, res, next) {
        const course = new Course(req.body);
        course.img = `https://img.youtube.com/vi/${req.body.video}/0.jpg`;
        course.save()
            .then(() => res.redirect('/'))
        res.json(course)
    }
}

module.exports = new CoursesController;