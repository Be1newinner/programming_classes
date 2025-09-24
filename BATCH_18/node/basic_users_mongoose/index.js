require("dotenv").config();

const express = require("express");
const connectDB = require("./src/config/db");
const UserModel = require("./src/models/users");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://shipsar.in"],
  })
);

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/find-movies", (req, res) => {});

app.get("/users", async (req, res) => {
  const data = await UserModel.find(
    {},
    {
      password: false,
    }
  );
  //   console.log(data);

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
