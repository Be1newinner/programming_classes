// const exress = require("express");
import express from "express";
import { todosRouter } from "./src/routes/todos.js";
/*
 MODULAR STRUCTURE

 /src/
    /models         - for databsase related
    /controller     - for controlling input and output in api
    /routes         - for api method and path and path params and middlewares
    /service        - for business logic of api other than route and controller and models 
    /utils          - reusable functions or varibales
 */

const app = express();
app.use(express.json());
const PORT = 8000;

app.use("/todos", todosRouter);

app.listen(PORT, () => {
  console.log(`SERVER is started at http://localhost:${PORT}`);
});
