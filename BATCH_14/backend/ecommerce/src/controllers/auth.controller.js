const AuthModel = require("../models/auth.model")

async function loginController(req, res) {
    try {
        const { email, password } = req.body;
        console.log(email, password)

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

        res.send({ data: user })
    } catch (error) {
        console.log(error);
        res.send({ message: "Unexpected Error!" })
    }
}

const registerController = async (req, res) => {
    try {
        const { email, password, name, age } = req.body;
        console.log(email, password)

        const user = await AuthModel.create({
            email: email,
            password: password,
            name: name,
            age: age
        })

        res.send({ data: user })
    } catch (error) {
        console.log(error);
        res.send({ message: "Unexpected Error!" })
    }
}

const logoutController = (req, res) => {
    res.send({ data: "logout" })
}


module.exports = {
    loginController,
    registerController,
    logoutController
}