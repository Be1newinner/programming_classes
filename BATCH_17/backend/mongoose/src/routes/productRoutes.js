const express = require("express");
const {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getSingleProductByID,
} = require("../controllers/productController");

const ProductRouter = express.Router();

// Define Routes
ProductRouter.get("/", getAllProducts);
ProductRouter.get("/:sku", getSingleProductByID);
ProductRouter.post("/", addProduct);
ProductRouter.put("/:id", updateProduct);
ProductRouter.delete("/:id", deleteProduct);

module.exports = ProductRouter;
