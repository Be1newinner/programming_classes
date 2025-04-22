const { Router } = require("express")

const ProductsRouter = Router();

ProductsRouter.get("/", (req, res) => {
    res.send({ data: "get products" })
})

ProductsRouter.post("/", (req, res) => {
    res.send({ data: "add prdoucts" })
})

ProductsRouter.delete("/", (req, res) => {
    res.send({ data: "delete" })
})

module.exports = ProductsRouter;