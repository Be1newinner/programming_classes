const express = require("express");
const connectDB = require("./src/config/db");
const { UserModel } = require("./src/models/users.models.js");

const app = express();
const PORT = 8000;

app.use(express.json())

app.get("/", (_, res) => {
    res.send({
        message: "THIS IS HOME ROUTE!"
    })
})

app.post("/users/", async (req, res) => {
    try {

        const { name, email, password, age } = req.body;

        await UserModel.create({
            name,
            email,
            password,
            age
        })

        res.send({
            name, email, password, age
        })

    } catch (error) {
        console.error(error.message);
        res.status(500).send({ error: "Internal Server Error!" })
    }
})


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("YOUR BACKEND IS RUNNING AT PORT ", PORT);
    })
}).catch((error) => {
    console.error(error);
})