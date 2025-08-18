const express = require("express");

const app = express();

app.use(express.json());

// middleware
// this is an additional setting or module to enhance express functionality

/*
[GET] =>    Data retrieve

[POST] =>   1. Sensitive Data (LOGIN)
            2. DATA CREATE DATABASE

[PUT]  =>   DATA UPDATE e.g. UPDATE USER PROFILE 

[PATCH] =>  SMALL DATA UPDATE   e.g. update gender, last name, 

[DELETE] => DATABASE me se DATA ko delete krne k liye

*/

app.get("/contact", (req, res) => {
  // res.send("HELLO CONTACT");
  res.json({
    name: "Vijay",
    age: 25,
    gender: "Male",
  });
});

app.get("/contacts", (req, res) => {
  // res.send("HELLO CONTACT");
  res.json([
    {
      name: "Vijay",
      age: 25,
      gender: "Male",
    },
    {
      name: "Vijay",
      age: 25,
      gender: "Male",
    },
    {
      name: "Vijay",
      age: 25,
      gender: "Male",
    },
    {
      name: "Vijay",
      age: 25,
      gender: "Male",
    },
  ]);
});

app.post("/", (req, res) => {
  res.send("HELLO WORLD POST");
});

app.post("/contact", (req, res) => {
  const body = req.body;

  console.log(body);

  res.json({
    name: req.body.name,
    age: body.age,
    is_run: body.is_run,
  });
});

// BODY TYPE INPUT
// post
// put
// patch

// app.put()
// app.patch()
// app.delete()

app.listen(8001, (error) => {
  console.log("SERVER STARTED");
  if (error) {
    console.log(error);
  }
});
