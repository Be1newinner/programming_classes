// Step 1
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todo_db");

// model
// model is the javascript implementations of possible collections schema of a database

// Step 2
const todoSchema = mongoose.Schema({
  title: String,
  status: String,
});

// Step 3
// 1. model name will start as Capital letter
// 2. model name will be in singular form
// 3. collection name will be in lower plural form
const todoModel = mongoose.model("Todo", todoSchema);

// Step 4
// inserting data
// (async function () {
//   const data = await todoModel.insertOne({
//     title: "SOEM TITLE OF TODO",
//     status: "PENDING",
//   });
//   console.log(data);
// })();

// finding data
// (async function () {
//   const data = await todoModel.find({});
//   console.log(data);
// })();

async function fetchAllTodos() {
  const data = await todoModel.find({});
  console.log(data);
}

fetchAllTodos();
