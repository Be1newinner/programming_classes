/* File System
// 
// 1. Files
//      Create File
//      Update File
        Reading a File      
*/

const fs = require("fs");

// Create a file or replace existing content
// fs.writeFileSync("hello.txt", "Hello, i am Vijay.")

// Append Data in the end of file
// fs.writeFileSync("hello.txt", "\nI am a Boy.", {
//     flag: "a"
// })

// Reading data from a file
// const data = fs.readFileSync("hello.txt", "utf-8");

//const data = fs.readFileSync("hello.txt");

//const parsed = Buffer.from(data).toString("utf-8") // utf-8 is character encoding

// console.log(data);
//console.log(parsed);

//fs.writeFileSync("Hi.txt", "I am Shaurya \nHad to programme a language", {
  //  flag: "a"
//})

const data = fs.readFileSync("Hi.txt", "utf-8");

console.log(data);


