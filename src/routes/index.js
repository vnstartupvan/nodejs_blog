const newsRouter = require('./news.route');
const homeRoute = require('./home.route');
const searchRoute = require('./search.route');

function route(app) {
    app.use(searchRoute)
    app.use(newsRouter)
    app.use(homeRoute)

    // app.post('/search', (req, res) => {
    //     console.log(req.body, 123)
    //     res.send("")
    // });
}

module.exports = route;