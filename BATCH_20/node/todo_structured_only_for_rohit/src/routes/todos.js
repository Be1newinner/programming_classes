import { Router } from "express";
import {
  addTodoController,
  fetchAllTodosController,
} from "../controller/todos.js";

const app = Router();

// fetch all todos
app.get("/", fetchAllTodosController);

// controller ek route function me last wala function hota hai!

// add todos
app.post("/", addTodoController);

export { app as todosRouter };
