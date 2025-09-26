const path = require("path");

// console.log(path.sep)

const rootPath = "src";

const relPath = "./dasd/root/index.js";
const filePath = path.join(
  rootPath,
  "feature",
  "something",
  path.basename(relPath)
);

// convert relative path to absolute
// console.log("PATH => ", path.resolve(relPath));
//
// console.log(path.isAbsolute(relPath))
//
// console.log(path.dirname(relPath)) // diretory name
//
// console.log(path.extname(relPath)) // extension name
//
// console.log(path.basename(relPath)) // file name
//
console.log(filePath);
