import Server from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from 'url';
import path, {
    dirname
} from "path";

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);

const route = Server.Router();

route.use(bodyParser.json({
    extended: true
}));
route.use(bodyParser.urlencoded({
    extended: true
}));

route.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})
// route.get('/', (req, res) => {
//     res.send('This is Home');
// })

export default route;