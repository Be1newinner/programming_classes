const { hashPassword } = require("../../shared/utils/hashing");
const AuthModel = require("../auth/auth.model");
const { loginService } = require("./auth.services");

async function loginController(req, res) {
    try {
        const { email, password } = req.body;
        const user = await loginService({ email, password })

        if (!user) {
            res.status(401).send({ message: "Invalid Password!" })
            return;
        }

        res.send({ data: "Logged In!" })
    } catch (error) {
        console.log(error);
        res.send({ message: "Unexpected Error!" })
    }
}

const registerController = async (req, res) => {
    try {
        const { email, password, name, age } = req.body;

        const hashedPassword = await hashPassword(password);

        const user = await AuthModel.create({
            email: email,
            password: hashedPassword,
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