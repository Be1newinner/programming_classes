// Methods 
// Docs = https://nodejs.org/api/path.html
// basename() =  returns the last portion of a path
// path.delimiter = return ; in windows and : in linux
// path.dirname(path) = returns the directory name of a path
// path.extname(path) = returns the extension of the path
// path.isAbsolute(path) = determines if the literal path is absolute.
// path.join([...paths]) =  joins all given path segments 
// path.resove(relative_path) = geives absolute path

const path = require("path");

const tempLocation = "./assets2/directory.js"
const tempAbsLocation = "/mnt/Work/Codes/programming_classes/BATCH_17/backend/demo/assets2/directory.js"

// const docs = path.basename("./assets2/directory.js", ".js")
// const docs = path.delimiter
// const docs = path.dirname(tempLocation);

// const docs = path.extname(tempLocation);
// const docs = path.basename(tempLocation, path.extname(tempLocation))

// const docs = path.resolve(tempLocation);
// const docs = path.isAbsolute(tempAbsLocation);
const docs = path.join(".", "Work", "Codes", "abc.js");

console.log(docs);