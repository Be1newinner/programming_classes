const express = require("express");
const connectDB = require("./src/config/connectDB.js");
const AuthRouter = require("./src/features/auth/auth.routes.js");
// const { hashPassword, verifyPassword } = require("./src/shared/utils/hashing.js");
// const ProductsRouter = require("./src/routes/products.routes.js");

const app = express();
const PORT = 8004;

app.use(express.json())

app.use("/auth", AuthRouter)
// app.use("/products", ProductsRouter)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("SERVER HAS STARTED AT PORT ", PORT);
    })
}).catch(error => {
    console.log(error)
})
