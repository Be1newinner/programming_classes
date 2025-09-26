const os = require("os");
const readline = require("readline");

// console.log(os.availableParallelism());

// console.log(os.cpus());
console.log(
  os.networkInterfaces()["WiFi"].find((item) => item.family === "IPv4").address
);
// console.log(os.freemem() / 1024 / 1024 / 1024);

// =============================================

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What do you think of Node.js? ", (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});

// const answer = await rl.question("What do you think of Node.js? ");

console.log(rl);
