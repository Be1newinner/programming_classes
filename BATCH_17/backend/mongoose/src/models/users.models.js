const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    age: Number
}
    // , {
    //     collection: "some_user"
    // }
)

exports.UserModel = model("User", userSchema);