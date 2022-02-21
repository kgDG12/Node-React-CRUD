const DB = require('mysql2');
require('dotenv/config');

const HOST = process.env.DB_HOST;
const PORT = process.env.DB_PORT;
const USER = process.env.DB_USERNAME;
const PASS = process.env.DB_PASSWORD;
const DBASE = process.env.DB_DATABASE;

const pool = DB.createPool({
    host: HOST,
    port: PORT,
    user: USER,
    password: PASS,
    database: DBASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// return pool;
module.exports = pool