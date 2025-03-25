const express = require("express");

const app = express();
const PORT = 8000;



app.get("/", (req, res) => {
    res.send("WELCOME TO MY HOMEPAGE!")
})

app.get("/contact", (req, res) => {
    res.send("WELCOME TO MY CONTACT!")
})


app.get("/about", (req, res) => {
    res.send("WELCOME TO MY ABOUT!")
})



app.listen(PORT, () => {
    console.log("HELLO SERVER IS STARTED!")
})

// app.listen(PORT, function () {

// })