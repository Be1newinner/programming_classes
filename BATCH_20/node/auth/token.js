const jwt = require("jsonwebtoken");

// const data = jwt.sign(
//   JSON.stringify({
//     sub: "this-is-id",
//     role: "admin",
//     maxAge: 60_000 * 60,
//   }),
//   "PASSWORD",
//   {
//     algorithm: "HS256",
//   }
// );
// const token =
//   "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0aGlzLWlzLWlkIiwicm9sZSI6ImFkbWluIiwibWF4QWdlIjozNjAwMDAwfQ.fBkEfQmFXBqmMqvQPqDu5XKnMjTj02dA1pFAtDF8gX8";

// function verifyToken(token) {
//   try {
//     jwt.verify(token, "PASSWORDA");
//     return true;
//   } catch (error) {
//     return false;
//   }
// }

// console.log(verifyToken(token));
