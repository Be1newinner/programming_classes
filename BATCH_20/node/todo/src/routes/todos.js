import { Router } from "express";
import {
  addTodo,
  deleteTodos,
  fetchTodos,
  fetchTodosByID,
  updateTodos,
} from "../controllers/todos.js";

const TodosRouter = Router();

// SERVIES FOR TODOS
// TO FETCH ALL TODOS
TodosRouter.get("/", fetchTodos);
//
// TO FETCH TODO by id
TodosRouter.get("/:id", fetchTodosByID);
//
// TO add todo
TodosRouter.post("/", addTodo);
//
// TO update todo
TodosRouter.patch("/:id", updateTodos);
//
// TO delete todo
TodosRouter.delete("/:id", deleteTodos);

export default TodosRouter;
