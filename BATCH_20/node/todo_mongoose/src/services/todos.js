import { Types } from "mongoose";
import { todoModel } from "../models/todo.js";

const todosData = [];

export const fetchTodoByIdService = async (id) => {
  // const todo = await todoModel.findById({});
  // console.log(id);
  const idObjectType = Types.ObjectId.createFromHexString(id);
  console.log(idObjectType);
  const todo = await todoModel
    .findOne(
      {
        _id: idObjectType,
      },
      {
        __v: false,
      }
    )
    .lean();
  console.log(todo);

  return todo;
};

export const fetchAllTodosService = async () => {
  // const todo = await todoModel.findById({});
  const todos = await todoModel.find({});

  return todos;
};
