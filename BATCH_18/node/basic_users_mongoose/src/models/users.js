const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  }
  // {
  //   collection: "users",
  // }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
