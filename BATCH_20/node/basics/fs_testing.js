const fs = require("fs");

// fs.writeFileSync("abc.txt", "data_dasdashjdghj");

// fs.appendFileSync("abc.txt", "something else;")

// const data = fs.readFileSync("abc.txt", "utf-8");

// for (let i = 0; i < 10; i++) {
//   fs.cpSync("abc.txt", `abc${i}.txt`);
// }

// console.log(data);

console.log(fs.statSync("./index.js"));
