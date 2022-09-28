const Course = require('../models/Course')

class HomeController {
    //[GET] /
    index(req, res) {
        // res.render('home')
        Course.find({}, (err, courses) => {
            if (!err) {
                courses = courses.map(course => course.toObject());
                res.render('home', {courses})
            } else {
                res.status(400).json({ error: "ERROR!" })
            }
        })
    }
}

module.exports = new HomeController;