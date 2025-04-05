const express = require("express");
const AuthRouter = require("./src/routes/auth.routes.js")

const app = express();
const PORT = 8000;
app.use(express.json())

app.use(AuthRouter);

app.listen(PORT, () => {
    console.log("SERVER HAS STARTED AT PORT ", PORT);
})