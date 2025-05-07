const express = require("express");
const connectDB = require("./src/config/connectDB.js");
const AuthRouter = require("./src/features/auth/auth.routes.js");
const { generateLoginTokens, verifyToken } = require("./src/shared/utils/jwt.js");
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


// const tokens = generateLoginTokens({
//     email: "Vijay@gmail.com",
//     id: "dasd481658"
// })
// console.log({ tokens })

console.log(verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlZpamF5QGdtYWlsLmNvbSIsImlkIjoiZGFzZDQ4MTY1OCIsImlhdCI6MTc0NjU0NDMxNX0.cHytC2RDu3gmYcXOSvpTeCV8eKFWXD2wwdbQt_x5PJ0"))