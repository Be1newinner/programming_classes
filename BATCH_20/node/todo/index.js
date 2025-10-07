import express from "express";
import TodosRouter from "./src/routes/todos.js";
import UsersRouter from "./src/routes/users.js";
import AuthRouter from "./src/routes/auth.js";

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    message: "Sun is beautiful!",
  });
});

app.use("/todos", TodosRouter);
app.use("/users", UsersRouter);
app.use("/auth", AuthRouter);

app.listen(PORT, () => {
  console.log(`APP IS RUNNING AT http://localhost:${PORT}`);
});
