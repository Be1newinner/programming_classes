// PATH MODULE
// DOCS: https://nodejs.org/api/path.html

// ============================== 1. CREATING A PATH
const path = require("path");
// const result = path.join("assets", "copy", "text.js");

// console.log(result)

// ============================= 2. Types of Path

// 1. Absolute Path
// 2. Relative Path

const abs_path = "/mnt/Work/Codes/programming_classes/BATCH_14/backend/asset/hello2.txt";

const rel_path = "./asset/hello2.txt"

// console.log(path.isAbsolute(rel_path))

// =============================== 3. Converting relative path to absolute path

// console.log(path.resolve(rel_path))

// =============================== 4. Fetching Directory from a path 

// console.log(path.dirname(abs_path))

// =============================== 5. Fetching File name from a path

console.log(path.basename(abs_path))
console.log(path.extname(abs_path))
// console.log(path.basename(abs_path, path.extname(abs_path)))
// console.log(path.basename(abs_path, ".txt"))
