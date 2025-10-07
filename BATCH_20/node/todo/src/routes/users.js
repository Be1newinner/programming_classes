import { Router } from "express";

const UsersRouter = Router();

// SERVIES FOR USERS ===================================================
// TO FETCH ALL TODOS
// Admin ONLY
UsersRouter.get("/", (req, res) => {
  res.json({
    message: "users fetched successfully!",
  });
});
//
// Admin ONLY
// TO FETCH TODO by id
UsersRouter.get("/:id", (req, res) => {
  res.json({
    message: "Todo fetched successfully!",
  });
});
//

// ===== FOR ALL USERS =====
// TO add todo ( REGISTER )
UsersRouter.post("/", (req, res) => {
  res.json({
    message: "Todo added successfully!",
  });
});
//
// TO update todo
UsersRouter.patch("/:id", (req, res) => {
  res.json({
    message: "Todo updated successfully!",
  });
});
//
// TO delete todo
UsersRouter.delete("/:id", (req, res) => {
  res.json({
    message: "Todo deleted successfully!",
  });
});

export default UsersRouter;
