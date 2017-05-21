const http = require('http');
const url = require('url');
const fs = require('fs');

function contentType(filename) {
  const type = /\.(.+)$/.exec(filename)[1];
  switch(type) {
  case 'html':
  case 'css': return 'text/' + type;
  case 'js': return 'application/x-javascript';
  case 'png': return 'image/png';
  case 'mp3': return 'audio/mp3';
  default: return 'text/plain';
  }
}

function sendFile(res, file) {
  fs.readFile('./public' + file, (err, data) => {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': contentType(file)});
    res.end(data);
  });
}

function sendJSON(res) {
  const json = {
    songSheets: [
      ['12134', '/img/0.png'],
      ['uas;flj', '/img/0.png'],
      ['sadjf;s', '/img/0.png'],
      ['asf;', '/img/0.png'],
      ['wpequ', '/img/0.png']
    ],
    songs: [
      ['123', 'jas'],
      ['jasf;', 'asdn'],
      ['12;z', 'n;z'],
      ['zjx', 'nz'],
      ['pwq', 'pfa'],
      ['p1q', 'pasfp'],
      ['pw23', 'pjafa'],
      ['pwasfj', 'pqwerp']
    ],
    singers: [
      ['zj;v', '/img/0.png'],
      ['as;jf;v', '/img/0.png'],
      ['zjasjf', '/img/0.png'],
      ['zj;afj', '/img/0.png']
    ]
  };
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(json));
}

const server = http.createServer();
server.on('request', (req, res) => {
  const pathname = url.parse(req.url).pathname;
  console.log(pathname);

  if (pathname === '/recommend' || pathname === '/songSheets') {
    sendJSON(res);
  } else if (pathname === '/Asign') {
    res.writeHead(200);
    res.end();
  } else {
    sendFile(res, (pathname === '/Emusic') ? '/index.html' : pathname);
  }
});

server.listen(3000);
console.log('Server running at http://localhost:3000/');
