const newsRouter = require('./news.route');
const homeRoute = require('./home.route');
const searchRoute = require('./search.route');
const coursesRoute = require('./courses.route');
const adminRoute = require('./admin.route');


function route(app) {
    app.use(adminRoute)
    app.use(coursesRoute)
    app.use(searchRoute)
    app.use(newsRouter)
    app.use(homeRoute)
    // app.post('/search', (req, res) => {
    //     console.log(req.body, 123)
    //     res.send("")
    // });
}

module.exports = route;