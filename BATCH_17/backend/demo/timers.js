console.log("simple console")

process.nextTick(() => {
    console.log("NEXT TICK")
});

setImmediate(() => {
    console.log("Immediate")
})

setTimeout(() => {
    console.log("TIMEOUT")
}, 2000)

setInterval(() => {
    console.log("INTEVAL")
}, 2000)

