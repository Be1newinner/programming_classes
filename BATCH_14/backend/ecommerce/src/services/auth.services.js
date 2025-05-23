import AuthModel from "../models/auth.model";

export async function loginService({ email, password }) {
    const user = await AuthModel.findOne({
        email: email,
        password: password
    }).select({
        password: false,
        __v: false
    }).lean()

    if (!user) {
        return res.status(401).send({ message: "User not found!" })
    }

    return user;
} 