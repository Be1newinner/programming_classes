import fs from "fs"

// const data = fs.readdirSync("assets", {
//     recursive: true,
//     withFileTypes: true
// })

// fs.mkdirSync("assets2")
// fs.rmdir("assets2", (err)=>console.log(err))
fs.copyFile("directory.js", "assets2", (err)=>console.log(err))