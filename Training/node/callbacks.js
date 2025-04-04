const fs = require("fs").promises;

(async function () {
    const data = await fs.readFile("events.js", "utf8");
    console.log(data);
})()

