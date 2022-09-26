const express = require('express')
const app = express()
const port = 3001


app.get('/home', (req, res) => {
    var a = 1;
    var b =2;
    var a = a + b;
    res.send('Hello World! asdasdasd nodemon ')
})

app.listen(port, () => {
    console.log(`Example app listening on port http//localhost:${port}`)
})