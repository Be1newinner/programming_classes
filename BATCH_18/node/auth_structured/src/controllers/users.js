const UserModel = require("../models/users");
const { registerUserService, fetchUsersService } = require("../services/users");

const fetchUsersController = async (req, res) => {
  const data = await fetchUsersService();
  res.json({ data });
};

const registerUserController = async (req, res) => {
  const { email, name, password } = req.body;

  const data = await registerUserService({ email, name, password });

  res.json({
    message: "User created successfully",
    data,
  });
};

module.exports = { fetchUsersController, registerUserController };
