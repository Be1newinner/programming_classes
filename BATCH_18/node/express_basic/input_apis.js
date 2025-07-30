const express = require("express");

const app = express();

/*
--- Type of User inputs
1. path params
2. Query Params
3. body - POST, PUT, PATCH
*/

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

// app.get("/products", (req, res) => {
//   res.send("PRODUCTS LIST");
// });

// 1. Path parameter
app.get("/products/:productId", (req, res) => {
  const data = req.params;
  console.log(data.productId);

  res.send("PRODUCTS LIST");
});

// 2. Query parameter
app.get("/products", (req, res) => {
  const data = req.query;
  const age = data.age;
  const gender = data.gender;
  const name = data.name;
  console.log(data);

  res.send("PRODUCTS LIST");
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
