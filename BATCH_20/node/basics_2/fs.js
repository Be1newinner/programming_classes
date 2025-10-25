const fs = require("fs");
// const fs = require("node:fs");

// Create Directory
// fs.mkdirSync("abc");
//
/* Remove empty directory
fs.rmdirSync("abc");
fs.rmSync("abc", {
	recursive: true;
});

const data = fs.readFileSync("fs.js", {
	encoding: "utf8"
});
// console.log(data);
// eval(data);

*/

const data = `
const a = 7;
const b = 8;

console.log(a + b);
`

fs.writeFileSync("abc.js", data, {
	flag: "w" // "a"
})

const sss = fs.readFileSync("abc.js", {
	encoding: "utf8"
})

eval(sss);

// fs.rmSync("abc.js")