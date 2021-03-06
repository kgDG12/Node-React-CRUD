const Server = require("express");
const bodyParser = require("body-parser");
const apiController = require("../app/controllers/apiController.js");

const route = Server.Router();

route.use(bodyParser.json({
    extended: true
}));
route.use(bodyParser.urlencoded({
    extended: true
}));

route.get('/get', apiController.getAll);
route.get('/get/:id', apiController.get);
route.post('/add', apiController.add);
route.put('/upd/:id', apiController.upd);
route.delete('/del/:id', apiController.del);
route.get('/search/:str', apiController.search);

route.use(apiController.notFound);

module.exports = route;