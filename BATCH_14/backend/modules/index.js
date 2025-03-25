/* File System
// DOCS = https://nodejs.org/api/fs.html
// 1. Files
//      Create File
//      Update File
        Reading a File      
        Delete a File
        Copy File
        Rename File
        Shortcut File

    2. Folder Operations
        CREATE A FOLDER
        DELETE A FOLDER
*/

const fs = require("fs");

// ============================ CREATE A FILE

// Create a file or replace existing content
// fs.writeFileSync("hello.txt", "Hello, i am Vijay.")

//  ============================ Write File

//fs.writeFileSync("Hi.txt", "I am Shaurya \nHad to programme a language", {
//  flag: "a"
//})

// Append Data in the end of file
// fs.writeFileSync("hello.txt", "\nI am a Boy.", {
//     flag: "a"
// })

// ============================= Read File

// Reading data from a file
// const data = fs.readFileSync("hello.txt", "utf-8");

//const data = fs.readFileSync("hello.txt");

//const parsed = Buffer.from(data).toString("utf-8") // utf-8 is character encoding

// console.log(data);
//console.log(parsed);

// const data = fs.readFileSync("Hi.txt", "utf-8");

// console.log(data);

// ============================= Delete File

// Async Method = it doesn't block the code below it.
// fs.unlink("hi.txt", (err) => {
//   // console.log(err)
//   console.log(err.message)
// })

// try {
//   // Syncronus method
//   // fs.unlinkSync("hi.txt");
//   fs.unlinkSync("Hi.txt");
// } catch (error) {
//   // console.log(error)
//   console.log(error.message)
// }

// =============================== Copy File

// fs.cpSync("hello.txt", "hello2.txt")
// fs.cpSync("hello.txt", "assets/hello2.txt")
// fs.cpSync("hello.txt", "asset/hello2.txt", {
//   force: false
// })
// fs.cpSync("hello.txt", "asset/hello2.txt", {
//   force: false
// })

// ================================= Rename a File

// fs.renameSync("hello.txt", "hello3.txt")

// fs.rename("hello.txt", "hello3.txt", (error) => {
//   console.log(error.message)
// })

// ================================== CREATE A SHORTCUT

// fs.link("hello3.txt", "hello_shortcut.txt", CB)
// fs.linkSync("hello3.txt", "hello_shortcut.txt")

// for(let i = 0; i < 2; i++) {
//   fs.linkSync("asset/hello2.txt", `asset/hello${i}_shorctu.txt`)
// }

// ==================================== CREATE A FOLDER

// fs.mkdir("assets5", (error) => {
//   console.log(error)
// })

// fs.mkdirSync("assets5")

// ==================================== DELETE A FOLDER

// fs.rmdir("assets5") // This is now deprecated use fs.rm() instead

// fs.rmdirSync("assets5", { // This is now deprecated use fs.rm() instead
//   recursive: true
// })

// fs.rmSync("assets5", {
//   recursive: true
// })

