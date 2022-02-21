const Express = require("express");
require('dotenv/config');
const cors = require('cors');
const path = require("path");
const pool = require("./database/connection.js");
const ApiRoutes = require("./routes/api.js");
const WebRoutes = require("./routes/web.js");

const Server = Express();
const URL = process.env.APP_URL
const PORT = process.env.PORT || 8080;

Server.use(cors());

pool.getConnection((err, conn) => {
    if (conn) {
        Server.listen(PORT, () => {
            console.log(`Server is running at ${URL}:${PORT}`)
        });
    } else {
        console.log('Error : ' + err.message)
    }
    pool.releaseConnection(conn);
})
Server.use('/api', ApiRoutes)
Server.use('/', WebRoutes)
// Server.use('*', WebRoutes)
// Server.use((err, res) => {
//     res.status(404).send('404 Not Found');    
// });

// process.on('uncaughtException', server.close())
// process.on('SIGTERM', server.close())