const { Schema, model } = require("mongoose");
const { TextJoiner, hashPassword } = require("../utils/hashing");

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

userSchema.pre("save", async function (next) {
    console.log("DATA => ", this.password, this.isModified("password"))
    this.password = await hashPassword(this.password, 6)
    console.log("DATA 2 => ", this.password, this.isModified("password"))
    next();
})

userSchema.post("findOne", function (data, next) {
    console.log("DATA RETRIEVED");
    next();
})

exports.UserModel = model("User", userSchema);