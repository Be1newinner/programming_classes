const express = require("express");

/*
 ****API Request METHODS

 DOCS https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods

1. GET  => unsecured data Share, small data retrieve
2. POST => Secured Data Share, Big retrieve, New Data Add Database
3. PUT   => Data replace
4. PATCH => Data update
5. DELETE => Delete Data

OPTIONS
HEAD
TRACE
CONNECT

 */

const app = express();
app.use(express.json()) // to fetch data from Body

const PORT = 3001;

/*
# user input

    1. params
    2. query
    3. body

*/

app.get("/", (req, res) => {

    res.send({
        data: "GET HOMEPAGE",
    })
})

app.get("/about", (req, res) => {

    res.send({
        data: "GET ABOUT",
    })
})

app.get("/contact", (req, res) => {

    res.send({
        data: "GET CONTACT",
    })
})

app.get("/contact/vijay", (req, res) => {

    res.send({
        data: "GET CONTACT",
    })
})

app.get("/:productID/about", (req, res) => {

    // const query = req.query;
    const { name, age } = req.query;
    const params = req.params;

    // console.log(query)
    console.log(params)

    res.send({
        data: "HELLO I AM VIJAY GET!",
        query: { name, age }
    })
})

app.post("/", (req, res) => {

    // const { name, age } = req.query;
    const body = req.body;
    console.log(body);

    res.send({
        data: "HELLO I AM VIJAY! POST",
        body
    })
})

app.put("/", (req, res) => {
    const body = req.body;
    console.log(body);

    res.send({
        data: "HELLO I AM VIJAY! PUT"
    })
})

app.patch("/", (req, res) => {
    const body = req.body;
    console.log(body);

    res.send({
        data: "HELLO I AM VIJAY! PATCH"
    })
})

app.delete("/", (req, res) => {
    const body = req.body;
    console.log(body);

    res.send({
        data: "HELLO I AM VIJAY! DELETE"
    })
})

app.listen(PORT, () => {
    console.log("APP IS STARTED!")
})