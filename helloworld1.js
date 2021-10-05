const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end('Hello world!')
})

server.listen(port, () => console.log(`server started on port ${port}; ` +
    'press Ctrl-C to terminate....'))