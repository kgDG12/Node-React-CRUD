import Express from "express";
import 'dotenv/config';
import cors from 'cors';
import bodyParser from "body-parser";
import pool from "./database/connection.js";
import ApiRoutes from "./routes/api.js";
import WebRoutes from "./routes/web.js";

const Server = Express();
const URL = process.env.APP_URL
const PORT = process.env.PORT || 8080;

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
Server.use('/', WebRoutes);
Server.use('/api', ApiRoutes);
Server.use((err, res) => {
    res.status(404).send('404 Not Found');
});

// process.on('uncaughtException', server.close())
// process.on('SIGTERM', server.close())