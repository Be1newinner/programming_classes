// DOcs = https://nodejs.org/api/http.html
const http = require('node:http');

const server = http.createServer((req, res) => {
    res.end(JSON.stringify({
        data: 'Hello World!',
    }));
});

server.listen(8000);
