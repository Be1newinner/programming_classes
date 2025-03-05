// console.log("hello")

// const fs = require("fs");
import fs from "fs"

let table = ""

for (let i = 1; i < 11; i++) {
    table += `2x${i}=${2 * i} \n`
}

fs.writeFileSync("hello.txt", table, {
    flag: "w"
})

console.log("File writing complete!")