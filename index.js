const http = require('http');
const fs = require('fs');

const server = http.createServer();
server.on('request', (req, res) => {

  fs.readFile('./public/index.html', (err, data) => {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
});

server.listen(3000);
console.log('Server running at http://localhost:3000/');
