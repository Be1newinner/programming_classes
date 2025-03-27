const { Router } = require("express");
const { fetchAllUsers, registerUser, loginUser, resetUser } = require("../controllers/users.controller");

const UserRouter = Router();

UserRouter.get("/", fetchAllUsers)
UserRouter.post("/register", registerUser)
UserRouter.post("/login", loginUser)
UserRouter.patch("/reset-password", resetUser)

module.exports = UserRouter
