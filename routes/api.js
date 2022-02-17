import Server from "express";
import {
    showAll
} from "../app/controllers/apiController.js";

const route = Server.Router();

route.get('/', showAll);

export default route;