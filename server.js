import Express from "express";
import 'dotenv/config';
import cors from 'cors';
import bodyParser from "body-parser";
import pool from "./database/connection.js";
import route from "./routes/api.js";

const Server = Express();
const URL = process.env.APP_URL
const PORT = process.env.PORT || 8080;

Server.use(bodyParser.json({
    extended: true
}));
Server.use(bodyParser.urlencoded({
    extended: true
}));
Server.use(cors());

pool.getConnection((err, conn) => {
    if (conn) {
        Server.listen(PORT, () => {
            console.log(`Server is running at ${URL}:${PORT}`);
        });
    } else {
        console.log('Error : ' + err.message);
    }
    pool.releaseConnection(conn);
})

Server.use('/api', route);

// process.on('uncaughtException', server.close())
// process.on('SIGTERM', server.close())