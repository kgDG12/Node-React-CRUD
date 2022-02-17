import Express from "express";
import 'dotenv/config';
import route from "./routes/web.js";

const Server = Express();
const URL = process.env.APP_URL
const PORT = process.env.PORT || 8080;


Server.listen(PORT, () => {
    console.log(`Server is running at ${URL}:${PORT}`);
});

Server.use('/', route);