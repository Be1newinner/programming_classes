const express = require("express");
// const path = require("path");

const app = express();
const PORT = 8000;

// middlewares
app.use(express.json());
app.use(express.urlencoded());

/*

API REQUEST METHOD:

GET
POST
PUT
PATCH
DELETE
HEAD

*/

/*
  request: Data sent by user or user's browser
  1. body input = POST, PUT, PATCH
  2. query params
  3. path params
  4. cookies
  5. headers
  
  res: DATA SENT BY OUR SERVER TO USER
    */

app.get("/", (req, res) => {
  res.send("WELCOME TO HOMEPAGE GET! vijay kumar");
});

app.get("/contact", (req, res) => {
  // res.send("WELCOME TO HOMEPAGE GET! vijay kumar");

  const params = req.query;

  res.json({
    message: "Welcome to Homepage",
    name: "Vijay",
    params,
  });
});

app.get("/contact/:id", (req, res) => {
  // res.send("WELCOME TO HOMEPAGE GET! vijay kumar");
  const { id } = req.params;

  res.json({
    message: "Welcome to Homepage",
    name: "Vijay",
    id,
  });
});

app.get("/admin/users/:id/name", (req, res) => {
  // res.send("WELCOME TO HOMEPAGE GET! vijay kumar");
  const { id } = req.params;

  res.json({
    message: "Welcome to Homepage",
    name: "Vijay",
    id,
  });
});

app.post("/", (req, res) => {
  const body = req.body;
  const headers = req.headers;
  const cookies = req.cookies;

  // console.log(body.name);
  res.json({
    message: "WELCOME TO HOMEPAGE POST! vijay kumar",
    body,
    headers,
    cookies,
  });
});

app.put("/", (req, res) => {
  res.send("WELCOME TO HOMEPAGE PUT! vijay kumar");
});

app.patch("/", (req, res) => {
  res.send("WELCOME TO HOMEPAGE PATCH! vijay kumar");
});

app.delete("/", (req, res) => {
  res.send("WELCOME TO HOMEPAGE DELETE! vijay kumar");
});

app.use("/about", express.static("public"));

// app.get("/about", (req, res) => {
//   const name = "Vijay";
//   res.send(`
//     <div style='color:red'>
//         <h1>${name}</h1>
//     </div>`);
// });

app.listen(PORT, () => {
  console.log(`APP IS STARTED AT http://localhost:${PORT}`);
});
