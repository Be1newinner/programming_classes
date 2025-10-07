import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
import { fetchTodoByIdService } from "../services/todos.js";

const TodosRouter = Router();

const todosData = [];

// SERVIES FOR TODOS
// TO FETCH ALL TODOS
export const fetchTodos = (req, res) => {
  const data = todosData;
  res.json({
    message: "Todos fetched successfully!",
    data: data,
    meta: {
      total: todosData.length,
    },
  });
};
//
// TO FETCH TODO by id
export const fetchTodosByID = (req, res) => {
  const id = req.params?.id;
  if (!id) throw new Error("ID is Required!");

  const todo = fetchTodoByIdService(id);

  res.json({
    message: "Todo fetched successfully!",
    data: todo,
  });
};
//
// TO add todo
export const addTodo = (req, res) => {
  const { title, description, status } = req.body;

  if (!title || !description || !status)
    throw new Error("title, description, status  is Required!");

  const id = uuidv4();

  todosData.push({
    id,
    title,
    description,
    status,
  });

  res.json({
    message: "Todo added successfully!",
    data: {
      id,
      title,
      description,
      status,
    },
  });
};
//
// TO update todo
export const updateTodos = (req, res) => {
  res.json({
    message: "Todo updated successfully!",
  });
};
//
// TO delete todo
export const deleteTodos = (req, res) => {
  res.json({
    message: "Todo deleted successfully!",
  });
};

export default TodosRouter;
