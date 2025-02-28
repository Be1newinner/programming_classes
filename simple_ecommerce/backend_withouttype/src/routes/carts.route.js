import { Router } from "express";
import {
  getAllItemsOfCartController,
  increaseItemQuanityInCartController,
} from "../controllers/carts.controller.js";

export const CartRouter = Router();

CartRouter.get("/:uid", getAllItemsOfCartController);
CartRouter.patch("/", increaseItemQuanityInCartController);
