// const exress = require("express");
import express from "express";
import { v4 as uuid } from "uuid";

const app = express();
app.use(express.json());
const PORT = 8000;

const todosData = [];

// fetch all todos
app.get("/todos", (req, res) => {
  res.json({
    message: "Data fetched Successfully!",
    data: todosData,
    status: 200,
  });
});

// add todos
app.post("/todos", (req, res) => {
//   const body = req.body;
//   console.log(body);
  const { title, status } = req.body;

  //   validations
  if (!title || !status) {
    res.json({
      message: "title or status missing!",
      status: 422,
    });
    return;
  }

  const newId = uuid();

  todosData.push({
    title,
    status: status ?? "PENDING",
    id: newId,
  });
  res.json({
    message: "Data fetched Successfully!",
    data: todosData,
    status: 200,
  });
});

app.listen(PORT, () => {
  console.log(`SERVER is started at http://localhost:${PORT}`);
});
