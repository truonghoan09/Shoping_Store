#!/bin/bash

#Step 1 
npm init -y
sed -i 's|"name": "test-create-server"|"name": "my-server"|g' package.json
sed -i 's|"author": ""|"author": "Lê Trường Hoan"|g' package.json
sed -i 's|"main": "index.js"|"main": "server.js"|g' package.json



#Step 2
npm i --save body-parser@1.19.0 dotenv@8.2.0 ejs@3.1.5 express@4.17.1 @babel/core@7.12.10 @babel/preset-env@7.12.10 @babel/node@7.12.10 nodemon@2.0.7

#Step 1.1 Bổ sung script
sed -i 's|"test": "echo \\"Error: no test specified\\" && exit 1"|"start": "nodemon --exec babel-node src/server.js"|g' package.json


#Step 3
mkdir src
mkdir src/config
mkdir src/controllers
mkdir src/public
mkdir src/route
mkdir src/services

touch src/server.js
touch src/config/viewEngine.js
touch src/controllers/homeController.js
touch src/route/web.js
touch .babelrc
touch .env
touch .env.example
touch .gitignore

#Step 4
echo '{
"presets": ["@babel/preset-env"]
}' > .babelrc

#Step 5
echo 'PORT=8008' > .env
echo 'PORT=' > .env.example

#Step 6
echo '/node_modules
/vendor
/.idea
.idea/
.env' > .gitignore

#Step 7
echo 'import express from "express";

let configViewEngine = (app) => {
app.use(express.static("./src/public"));
app.set("view engine", "ejs");
};

module.exports = configViewEngine;' > src/config/viewEngine.js

#Step 8
echo 'import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
router.get("/", homeController.getHomePage);
return app.use("/", router);
};

module.exports = initWebRoutes;' > src/route/web.js

#Step 9
echo 'const getHomePage = (req, res) => {
return res.send("Server is Running!");
};

module.exports = {
getHomePage: getHomePage,
};' > src/controllers/homeController.js


#Step 10
echo 'import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine"
import initWebRoutes from "./route/web";
require("dotenv").config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

configViewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 6969;

app.listen(port, () => {
console.log("Server is running at port: ", port);
});' > src/server.js


#Step 11
npm i --save sequelize sequelize-cli mysql2

#Step 12
cd src
npx sequelize init
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
