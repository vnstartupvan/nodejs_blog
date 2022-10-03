const Course = require('../models/Course');
const { multipleMongooseObj, mongooseObj } = require('../utils/mongoose');

class CoursesController {
    //[GET] 
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
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
            .catch(next);
    }
    //[GET] 
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => {
                res.render('edit', { course: mongooseObj(course) })
            })
            .catch(next);
    }
    //[PUT]
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => {
                res.redirect('/courses/admin')
            })
            .catch(next);
    }
    //[PATCH]
    destroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => {
                console.log(req.params.id)
                res.redirect('back')
            })
            .catch(next);
    }
}

module.exports = new CoursesController;