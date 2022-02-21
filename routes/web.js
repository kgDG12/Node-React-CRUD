const Server = require("express");
const bodyParser = require("body-parser");
const path = require("path");
require('dotenv/config');

const route = Server.Router();

route.use(bodyParser.json({
    extended: true
}));
route.use(bodyParser.urlencoded({
    extended: true
}));

route.use(Server.static(path.join(__dirname, '../public')))

route.use((req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})
// route.get('/hello', (req, res) => {
//     // res.sendFile(path.join(__dirname, '../public/index.html'));
//     res.send('Hello there')
// })
// route.get('/', (req, res) => {
//     res.send('This is Home');
// })

module.exports = route