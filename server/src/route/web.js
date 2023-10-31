import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.post('/api/create_new_user', homeController.createNewUser);
    router.post('/api/sign_in', homeController.signIn);
    router.post('/api/check_token', homeController.checkToken);
return app.use("/", router);
};

module.exports = initWebRoutes;
