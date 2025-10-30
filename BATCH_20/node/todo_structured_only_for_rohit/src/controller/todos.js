import { todosData } from "../models/todos.js";
import { addTodoService } from "../service/todos.js";

//controller starts

export const fetchAllTodosController = (req, res) => {
  res.json({
    message: "Data fetched Successfully!",
    data: todosData,
    status: 200,
  });
};

export const addTodoController = (req, res) => {
  // input starts
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
  // input ends

  const todosData = addTodoService(title, status);

  // output
  res.json({
    message: "Data fetched Successfully!",
    data: todosData,
    status: 200,
  });
};

//controller ends
