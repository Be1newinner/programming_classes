import fs from "fs"

// const data = fs.readdirSync("assets", {
//     recursive: true,
//     withFileTypes: true
// })
dd
// fs.mkdirSync("assets2")
// fs.rmdir("assets2", (err)=>console.log(err))
// fs.copyFile("directory.js", "assets2/directory.js", (err)=>console.log(err))

// fs.copyFile("directory.js", "assets2/directory.js", 2, (err)=>console.log(err))

fs.symlink("directory.js", "dir",  (err)=>console.log(err))