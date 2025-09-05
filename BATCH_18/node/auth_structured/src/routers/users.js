const { Router } = require("express");
const {
  fetchUsersController,
  registerUserController,
} = require("../controllers/users");

const UserRouter = Router();

UserRouter.get("/", fetchUsersController);
UserRouter.post("/", registerUserController);

module.exports = UserRouter;
