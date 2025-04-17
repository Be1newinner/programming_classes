const { Router } = require("express");
const { loginController, registerController, logoutController } = require("../controllers/auth.controller");

const AuthRouter = Router();

AuthRouter.post("/login", loginController)
AuthRouter.post("/register", registerController)
AuthRouter.delete("/logout", logoutController)

module.exports = AuthRouter;