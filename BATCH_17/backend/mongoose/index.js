require("dotenv").config();

const express = require("express");
const connectDB = require("./src/config/db");
const UserRouter = require("./src/routes/users.route.js");
const ProductRouter = require("./src/routes/productRoutes.js");
const swaggerDocs = require("./src/config/swagger.js");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 8001;

swaggerDocs(app)

app.use(express.json())
app.use(cookieParser())

app.get("/", (_, res) => {
    res.send({
        message: "THIS IS HOME ROUTE!"
    })
})

app.use("/users", UserRouter);
app.use("/products", ProductRouter);
// app.use("/products", ProductRouter);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("YOUR BACKEND IS RUNNING AT PORT ", PORT);
    })
}).catch((error) => {
    console.error(error.message);
})