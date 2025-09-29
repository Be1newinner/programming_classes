const express = require("express");
const path = require("path");

const app = express();
const PORT = 8000;

/*

API REQUEST METHOD:

GET
POST
PUT
PATCH
DELETE
HEAD

*/

app.get("/", (req, res) => {
  /*
    request: Data sent by user or user's browser
    1. body input
    2. query params
    3. path params
    4. cookies
    5. headers
    
    res: DATA SENT BY OUR SERVER TO USER
    */

  res.send("WELCOME TO HOMEPAGE GET! vijay kumar");
});

app.post("/", (req, res) => {
  res.send("WELCOME TO HOMEPAGE POST! vijay kumar");
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
