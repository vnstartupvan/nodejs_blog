const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3001;
const route = require('./routes')
app.use(express.static(path.join(__dirname, 'public')));
//HTTPS Logger
// app.use(morgan('combined'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//Template engine
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('views', path.join(__dirname, 'resouce/views'));
app.set('view engine', 'hbs');
//Route init
route(app);




app.listen(port, () => {
    console.log(`Example app listening on port http//localhost:${port}`)
});
