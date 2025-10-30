//service start
import { v4 as uuid } from "uuid";
import { todosData } from "../models/todos.js";

export function addTodoService(title, status) {
  const newId = uuid();

  todosData.push({
    title,
    status: status ?? "PENDING",
    id: newId,
  });

  return todosData;
}

// service end
