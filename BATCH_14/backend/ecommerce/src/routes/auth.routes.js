const { Router } = require("express");

const AuthRouter = Router();

const users = [
    {
        email: "abc@gmail.com",
        password: "vijay123",
        name: "Vijay Kumar"
    },
    {
        email: "abc2@gmail.com",
        password: "vijay1234",
        name: "Ajay Kumar"
    }
]

AuthRouter.post("/login", (req, res) => {
    const body = req.body;

    // console.log({ body })

    const user = users.find(e => e.email === body.email && e.password === body.password)

    console.log({ user })

    if (user) {
        res.status(200).send({
            message: "LOGIN SUCCESS!",
            data: user
        })
    } else {
        res.status(404).send({
            message: "User not found!",
            data: null
        })
    }

})

AuthRouter.post("/register", (req, res) => {
    res.status(200).send({
        message: "REGISTER SUCCESS!"
    })
})

module.exports = AuthRouter