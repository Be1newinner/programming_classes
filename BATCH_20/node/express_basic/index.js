const express = require("express");
// const path = require("path");

const app = express();
const PORT = 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded());
// app.use()

/*

API REQUEST METHOD:

GET => Retrieve data, send non sensitive data, for basic form inputs
POST => GET ka alternative for large data input or sensitive input and large output. to add new data in the database
PUT => Update ( We take full document as input and replace full document in db )
PATCH => update a few keys ( one or more ) of a document. e.g. change name in db 
DELETE => delete a data.
HEAD => when we want to retrieve only the response header like status and cookies.

*/

/*
  request: Data sent by user or user's browser
  1. body input = POST, PUT, PATCH
  2. query params
  3. path params
  4. cookies
  5. headers
  6. Authorization
  
  res: DATA SENT BY OUR SERVER TO USER
    */

/*

Cookies!

1. Backend recieve kese krega  ( FROTNEND => BACKEND )  
2. Frontend recieve kese krega ( BACKEND => FROTNEND )

** FRONTEND KO KUCH NaHi KRNA COOKIE SE RELATED!
** KAAM KREGA BACKEND ENGINEER

*/

app.get("/", (req, res) => {
  res.send("WELCOME TO HOMEPAGE GET! vijay kumar");
});

app.get("/contact", (req, res) => {
  // res.send("WELCOME TO HOMEPAGE GET! vijay kumar");

  const params = req.query;
  // const date = new Date();
  // date.setHours(9);

  // res.cookie();
  // res.json();

  res
    .cookie("refresh-token3", "dasd484534fcujo3cmlwe436", {
      maxAge: 21 * 24 * 60 * 60 * 1000,
      // expires: date.toUTCString(),
      path: "/contact",
      secure: true, // only https website can access it on https backend
      httpOnly: true, // only server can access this cookie, js in client can not
      domain: "localhost",
    })
    .json({
      message: "Welcome to Homepage",
      name: "Vijay",
      params,
    });
});

// sample url: http://localhost:8000/contact/45
app.get("/contact/:id", (req, res) => {
  // res.send("WELCOME TO HOMEPAGE GET! vijay kumar");
  const { id } = req.params;

  res.json({
    message: "Welcome to Homepage",
    name: "Vijay",
    id,
  });
});

// sample url: http://localhost:8000/contact?id=45&hobby=gaming&hobby=food
app.get("/contact/", (req, res) => {
  // res.send("WELCOME TO HOMEPAGE GET! vijay kumar");
  const { id } = req.query;
  // res.end();
  // return;

  res.json({
    message: "Welcome to Homepage",
    name: "Vijay",
    id,
  });
});

app.get("/admin/users/:id/:name/data", (req, res) => {
  // res.send("WELCOME TO HOMEPAGE GET! vijay kumar");
  const { id, name } = req.params;

  res.json({
    message: "Welcome to Homepage",
    name: "Vijay",
    id,
  });
});

app.post("/", (req, res) => {
  const body = req.body;
  const headers = req.headers;
  // Accessing Tokens
  const authorization = req.headers.authorization;
  const cookies = req.cookies;

  // sample authorization output for bearer token
  // authorization = "Bearer dasda4d5as84d86a54das84d6as"
  // token = authorization.split(" ")[1];

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
