require("dotenv").config();

const express = require("express");
const swaggerUi = require("swagger-ui-express");

const connectDB = require("./src/config/db");
const UserModel = require("./src/models/users");
const swaggerDocument = require("./swagger.json");

const app = express();

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/find-movies", (req, res) => {
  res.json({data: "some_movies"})
});

app.get("/users", async (req, res) => {
  const data = await UserModel.find(
    {},
    {
      password: false,
    }
  );
  res.json({ data });
});

app.post("/users", async (req, res) => {
  const { email, name, password } = req.body;
  console.log({
    email,
    name,
    password,
  });

  const data = await UserModel.insertOne({
    name,
    email,
    password,
  });

  console.log(data);

  res.json({
    message: "User created successfully",
    data,
  });
});

connectDB()
  .then(() => {
    app.listen(8001, () => {
      console.log("Server started successfully!");
    });
  })
  .catch((error) => {
    console.error("Some Error Occured!", error);
  });
