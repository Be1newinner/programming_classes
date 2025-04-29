const { Schema, model } = require("mongoose");
const { hashPassword } = require("../../shared/utils/hashing");

const authSchema = new Schema({
    "name": String,
    "email": String,
    "password": String,
    "age": Number,
})

// update
// create
// authSchema.pre("save", async function (next) {
//     try {

//         if (!this.isModified("password")) {
//             return next()
//         }

//         this.password = await hashPassword(this.password);
//         // password hashed 1
//         console.log("MIDDLEWARE RAN!", this.password)
//         next()
//     } catch (error) {
//         console.log(error)
//         next(error);
//     }
// })


const AuthModel = model("User", authSchema)

module.exports = AuthModel;