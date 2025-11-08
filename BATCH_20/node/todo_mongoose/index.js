import "dotenv/config";
import express from "express";
import TodosRouter from "./src/routes/todos.js";
import UsersRouter from "./src/routes/users.js";
import AuthRouter from "./src/routes/auth.js";
import connectDB from "./src/config/db.js";

// STEP 1
// Install following
// https://www.npmjs.com/package/swagger-ui-express
// https://www.npmjs.com/package/swagger-jsdoc


// Step2 import following
import swaggerUi from "swagger-ui-express";
import { openapiSpecification } from "./src/config/swagger.js";

const app = express();
const PORT = 8000;

app.use(express.json());

// Step 3 use swagger for middleware
app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));





app.get("/", (_, res) => {
  res.json({
    message: "Sun is beautiful!",
  });
});

app.use("/todos", TodosRouter);
app.use("/users", UsersRouter);
app.use("/auth", AuthRouter);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`APP IS RUNNING AT http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// async function main() {
//   try {
//     await connectDB();
//     app.listen(PORT, () => {
//       console.log(`APP IS RUNNING AT http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// }

// main();
