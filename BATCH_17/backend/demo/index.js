// console.log("hello")

// const fs = require("fs");
import fs from "fs"

// let table = ""

// for (let i = 1; i < 11; i++) {
//     table += `2x${i}=${2 * i} \n`
// }

// fs.writeFileSync("hello.txt", table, {
//     flag: "w"
// })

// console.log("File writing complete!")

// const data = fs.readFileSync("hello.txt", {
//     encoding: "utf-8"
// })

// console.log(data)

// const data = fs.readFileSync("hello.txt")

// console.log(data.toString())

// fs.unlink("hello2.txt", (error) => {
//     console.log(error.message)
// })

(async function () {
    fs.readFile("hello.txt", {
        encoding: "utf-8"
    }, async (err, data) => {
        if (err) console.log(err.message)
        else console.log(data)
    })
})()


// try {

//     fs.unlink("hello2.txt", () => {

//     })

// } catch (error) {
//     console.log(error.message)
// }