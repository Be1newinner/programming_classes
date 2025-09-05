require("dotenv").config();

const express = require("express");
const swaggerUi = require("swagger-ui-express");

const connectDB = require("./src/config/db");
const swaggerDocument = require("./swagger.json");
const UserRouter = require("./src/routers/users");

const app = express();

app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/find-movies", (req, res) => {
  res.json({ data: "some_movies" });
});

app.use("/users", UserRouter);
// app.use("/products", ProductRouter);
// app.use("/categories", CategoriesRouter);

connectDB()
  .then(() => {
    app.listen(8001, () => {
      console.log("Server started successfully!");
    });
  })
  .catch((error) => {
    console.error("Some Error Occured!", error);
  });
