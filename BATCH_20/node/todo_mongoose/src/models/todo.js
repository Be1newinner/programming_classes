import { model, Schema } from "mongoose";

const todoSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  status: String,
});

export const todoModel = model("Todo", todoSchema);
