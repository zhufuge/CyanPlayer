const http = require('http');
const router = require('./server/router');

const server = http.createServer();
server.on('request', router);

server.listen(3000);
console.log('Server running at http://localhost:3000/');
