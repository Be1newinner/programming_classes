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

  res
    .cookie("refresh-token3", "dasd484534fcujo3cmlwe436", {
      maxAge: 21 * 24 * 60 * 60 * 1000,
      // expires: date.toUTCString(),
      path: "/contact",
      secure: true,
      httpOnly: true,
      domain: "localhost",
    })
    .json({
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
