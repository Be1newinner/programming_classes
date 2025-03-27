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

app.get("/users", async (req, res) => {
    try {

        const data = await UserModel.find({}).select({
            password: false,
            __v: false
        }).lean();

        if (!data) {
            res.status(404).send({ error: "No Users Found!" });
            return;
        }

        res.status(200).send({
            message: "Users retrieved successfully!",
            data
        })

    } catch (error) {
        console.error(error.message);
        res.status(500).send({ error: "Internal Server Error!" })
    }

})

app.post("/users/register", async (req, res) => {
    try {

        const { name, email, password, age } = req.body;

        const data = await UserModel.create({
            name,
            email,
            password,
            age
        })

        console.log(data)

        res.status(201).send({
            name, email, password, age, user_id: data._id
        })

    } catch (error) {
        console.log(error.code)
        if (error?.code === 11000) {
            res.status(409).send({ error: "email id already exist!" });
            return;
        }

        console.error(error.message);
        res.status(500).send({ error: "Internal Server Error!" })
    }
})


app.post("/users/login", async (req, res) => {
    try {

        const { email, password } = req.body;

        // const data = await UserModel.findOne({
        //     email, password
        // }, {
        //     __v: false,
        //     passowrd: false
        // })

        // const data = await UserModel.findOne({
        //     email, password
        // }, "-__v, -password")

        const data = await UserModel.findOne({
            email, password
        }).select({
            __v: false,
            password: false,
            email: false,
            age: false
        }).lean()

        // console.log(data)

        if (!data) {
            res.status(404).send({ error: "Invalid credentials!" });
            return;
        }

        res.status(200).send({
            user_id: data._id,
            name: data.name,
            email
        })

    } catch (error) {
        // console.log(error.code)
        // if (error?.code === 11000) {
        //     res.status(409).send({ error: "email id already exist!" });
        //     return;
        // }

        console.error(error.message);
        res.status(500).send({ error: "Internal Server Error!" })
    }
})


app.post("/users/reset-password", async (req, res) => {
    try {

        const { email, password, new_password } = req.body;

        const data = await UserModel.updateOne({
            email, password
        }, {
            $set: {
                password: new_password
            }
        })

        if (data.modifiedCount === 1) {
            res.status(200).send({
                message: "Password modified successfully!"
            })
            return;
        }

        res.status(404).send({
            error: "Invalid credentials!"
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