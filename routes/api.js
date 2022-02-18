import Server from "express";
import bodyParser from "body-parser";
import {
    getAll,
    get,
    add,
    notFound
} from "../app/controllers/apiController.js";

const route = Server.Router();

route.use(bodyParser.json({
    extended: true
}));
route.use(bodyParser.urlencoded({
    extended: true
}));

route.get('/get', getAll);
route.get('/get/:id', get);
route.post('/add', add);

route.use(notFound);

export default route;