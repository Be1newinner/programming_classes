const express = require("express");
const path = require("path");

const app = express();

/*
--- Type of User inputs
1. path params
2. Query Params
3. body - POST, PUT, PATCH
*/

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/", (req, res) => {
  res.send("HELLO WORLD");
});

app.get("/api/home", (req, res) => {
  res.send("Home APIS");
});

// app.get("/products", (req, res) => {
//   res.send("PRODUCTS LIST");
// });

// 1. Path parameter
app.get("/api/products/:productId", (req, res) => {
  const data = req.params;
  console.log(data.productId);

  res.send("PRODUCTS LIST");
});

// 2. Query parameter
app.get("/api/products", (req, res) => {
  const data = req.query;

  const age = data.age;
  const gender = data.gender;
  const fullname = data.fullname;
  const hobbies = data.hobbies;
  const email = data.email;
  console.log(data);

  res.json({
    fullname,
    age,
    gender,
    hobbies,
    email,
  });
});

// app.get("/contact", (req, res) => {
//   // res.send("HELLO CONTACT");
//   res.json({
//     name: "Vijay",
//     age: 25,
//     gender: "Male",
//   });
// });

app.listen(8002, (error) => {
  console.log("SERVER STARTED");
  if (error) {
    console.log(error);
  }
});
