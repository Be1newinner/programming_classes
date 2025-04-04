const Emitter = require("events");
const emitter = new Emitter();

emitter.on("WELCOME", (name) => {
    console.log("WELCOME EVENT : ", name);
})

emitter.on("WELCOME", (name) => {
    console.log("WELCOME EVENT 2 : ", name);
})

setTimeout(() => {
    emitter.emit("WELCOME", "SOME");
}, [2000])