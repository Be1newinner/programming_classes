const express = require("express");

const app = express();
const PORT = 8000;

app.use(express.json())

app.get("/", (req, res) => {
    res.send("WELCOME TO MY HOMEPAGE! GET")
})

app.post("/", (req, res) => {
    const body = req.body;
    console.log(body)
    res.send("WELCOME TO MY HOMEPAGE! POST")
})

app.put("/", (req, res) => {
    res.send("WELCOME TO MY HOMEPAGE! PUT")
})

app.patch("/", (req, res) => {
    res.send("WELCOME TO MY HOMEPAGE! PATCH")
})

app.delete("/", (req, res) => {
    res.send("WELCOME TO MY HOMEPAGE! DELETE")
})

app.get("/contact", (req, res) => {
    res.send("WELCOME TO MY CONTACT!")
})

app.get("/about", (req, res) => {
    const query = req.query.name;
    console.log(query);
    res.send("WELCOME TO MY ABOUT!")
})

app.get("/about/:slug/blog/:id", (req, res) => {
    const params = req.params.slug;
    const id = req.params.id;
    // console.log(params)
    res.send(`WELCOME TO MY ABOUT ${params.toUpperCase()}!`)
})

app.listen(PORT, () => {
    console.log("HELLO SERVER IS STARTED!")
})
