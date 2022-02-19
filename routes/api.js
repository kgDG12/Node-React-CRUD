import Server from "express";
import bodyParser from "body-parser";
import apiController from "../app/controllers/apiController.js";

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

route.use(apiController.notFound);

export default route;