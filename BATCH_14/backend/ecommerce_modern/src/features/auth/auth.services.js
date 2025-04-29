import { verifyPassword } from "../../shared/utils/hashing.js";
import AuthModel from "../auth/auth.model.js";

export async function loginService({ email, password }) {
    const user = await AuthModel.findOne({
        email: email,
    }).select({
        password: true,
        _id: false
    }).lean()

    console.log({ user })

    if (!user) throw new Error("USER DOESN'T EXIST")

    const isValiPassword = await verifyPassword(password, user.password)

    console.log(isValiPassword)

    return isValiPassword;
} 