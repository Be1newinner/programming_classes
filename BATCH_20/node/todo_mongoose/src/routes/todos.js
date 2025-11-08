import { Router } from "express";
import {
  addTodo,
  deleteTodos,
  fetchTodos,
  fetchTodosByID,
  updateTodos,
} from "../controllers/todos.js";

const TodosRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Todos
 *   description: API for managing todos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "b9c5e650-7f20-4cb0-b2ee-09e233a7f1b4"
 *         title:
 *           type: string
 *           example: "Buy groceries"
 *         description:
 *           type: string
 *           example: "Milk, eggs, bread"
 *         status:
 *           type: string
 *           example: "pending"
 *     TodoInput:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - status
 *       properties:
 *         title:
 *           type: string
 *           example: "Read a book"
 *         description:
 *           type: string
 *           example: "Read 'Clean Code'"
 *         status:
 *           type: string
 *           example: "in-progress"
 */

/**
 * @swagger
 * /api/todos:
 *   get:
 *     summary: Get all todos
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: List of all todos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Todos fetched successfully!
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Todo'
 *                 meta:
 *                   type: object
 *                   properties:
 *                     total:
 *                       type: integer
 *                       example: 5
 */
TodosRouter.get("/", fetchTodos);

/**
 * @swagger
 * /api/todos/{id}:
 *   get:
 *     summary: Get a todo by ID
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The todo ID
 *         schema:
 *           type: string
 *           example: "b9c5e650-7f20-4cb0-b2ee-09e233a7f1b4"
 *     responses:
 *       200:
 *         description: Todo fetched successfully!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Todo fetched successfully!
 *                 data:
 *                   $ref: '#/components/schemas/Todo'
 *       404:
 *         description: Todo not found
 */
TodosRouter.get("/:id", fetchTodosByID);

/**
 * @swagger
 * /api/todos:
 *   post:
 *     summary: Add a new todo
 *     tags: [Todos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TodoInput'
 *     responses:
 *       200:
 *         description: Todo added successfully!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Todo added successfully!
 *                 data:
 *                   $ref: '#/components/schemas/Todo'
 *       400:
 *         description: Invalid input
 */
TodosRouter.post("/", addTodo);

/**
 * @swagger
 * /api/todos/{id}:
 *   patch:
 *     summary: Update a todo
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The todo ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TodoInput'
 *     responses:
 *       200:
 *         description: Todo updated successfully!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Todo updated successfully!
 *       404:
 *         description: Todo not found
 */
TodosRouter.patch("/:id", updateTodos);

/**
 * @swagger
 * /api/todos/{id}:
 *   delete:
 *     summary: Delete a todo
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The todo ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Todo deleted successfully!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Todo deleted successfully!
 *       404:
 *         description: Todo not found
 */
TodosRouter.delete("/:id", deleteTodos);

export default TodosRouter;
