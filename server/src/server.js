import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine"
import initWebRoutes from "./route/web";
require("dotenv").config();
const cors = require('cors')

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

configViewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 6969;

app.listen(port, () => {
console.log("Server is running at port: ", port);
});
