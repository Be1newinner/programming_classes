fs.readFile('root.txt', "utf-8", (value) => {
    if (value) {
        fs.appendFile("root.txt", "even")
    }
})
const data = fs.readFileSync('root.txt', 'utf-8', () => { })

const arrOfLines = data.replaceAll("\r", "").split("\n").map(e => {

    if (e % 2 == 0) {
        return e + " even"
    } else {
        return e + " odd"
    }

});

console.log(arrOfLines.join("\n"))

fs.writeFileSync('root.txt', arrOfLines.join("\n"));