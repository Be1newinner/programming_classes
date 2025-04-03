const { UserModel } = require("../models/users.models.js");
const { TextJoiner, verifyPassword } = require("../utils/hashing.js");
const { generateLoginTokens } = require("../utils/jwt.js");

exports.fetchAllUsers = async (req, res) => {
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

}

exports.registerUser = async (req, res) => {
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
}

exports.loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;
        const cookies = req.cookies;
        console.log("cookies", cookies)
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
            email
        }).select({
            password: true,
        }).lean()


        if (!data) {
            res.status(404).send({ error: "user not found!" });
            return;
        }

        const hashedPassword = await verifyPassword(password, data.password)
        console.log({ hashedPassword });

        if (!hashedPassword) {
            res.status(404).send({ error: "password invalid!" });
            return;
        }

        const user = await UserModel.findOne({
            email
        }).select({
            __v: false,
            password: false,
            email: false,
            age: false
        }).lean()

        // console.log(data)

        if (!user) {
            res.status(404).send({ error: "Invalid credentials!" });
            return;
        }

        const tokens = await generateLoginTokens({
            id: user._id,
            email: user.email,
            role: "USER"
        });

        if (!tokens) {
            res.status(500).send({ error: "Internal server error!" })
            return;
        }

        res.cookie("refresh_token", tokens.refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict"
        }).status(200).send({
            user_id: user._id,
            name: user.name,
            email,
            accesToken: tokens.accessToken
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
}

exports.resetUser = async (req, res) => {
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
}