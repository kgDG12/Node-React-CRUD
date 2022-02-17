import Server from "express";
import {
    showHome
} from "../app/controllers/homeController.js";

const route = Server();

route.get('/', showHome);

export default route;