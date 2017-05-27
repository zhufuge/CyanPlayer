const url = require('url'),
      fs = require('fs'),
      path = require('path');

const {
  contentType,
  readPostBody,
} = require('./helper');

function sendFile(res, file) {
  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end();
    } else {
      res.writeHead(200, {'Content-Type': contentType(file)});
      res.end(data);
    }
  });
}

function sendSong(req, res) {
  readPostBody(req, (data) => {
    let json = {};
    if (data.id === '002') {
      json = {
        name: 'MyDestiny',
        album: '来自星星的你',
        singer: 'LYn',
        lrc: 'my destiny',
        img: 'img/2.jpg',
        audio: 'music/MyDestiny.mp3'
      };
    } else {
      json = {
        name: 'TimeToSayGoodbye',
        album: '...',
        singer: 'Lauren',
        lrc: 'time to say goodbye',
        img: 'img/0.png',
        audio: 'music/TimeToSayGoodbye.mp3'
      };
    }

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(json));
  });
}

function handleSign(req, res) {
  readPostBody(req, (data) => {
    if (data.username !== "321" &&
        data.password !== "321" &&
        data.isSignin === "true") {
      res.writeHead(200);
    } else {
      res.writeHead(401);
    }
    res.end();
  });
}

function sendSongSheet(req, res) {
  readPostBody(req, data => {
    console.log(data.id);
    fs.readFile(path.join('./server/json/songSheet.json'), (err, d) => {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(d);
    });
  });
}

function sendDownloadList(req, res) {
  readPostBody(req, data => {
    console.log(data.username);
    fs.readFile(path.join('./server/json/downloadList.json'), (err, d) => {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(d);
    });
  });
}

function router(req, res) {
  const pathname = url.parse(req.url).pathname;
  console.log(pathname);

  switch(pathname) {
  case '/Asign':
    handleSign(req, res);
    break;
  case '/recommend':
  case '/songSheets':
  case '/rank':
  case '/singers':
  case '/newest':
    sendFile(res, path.join('./server/json', pathname + '.json'));
    break;
  case '/song':
    sendSong(req, res);
    break;
  case '/songSheet':
    sendSongSheet(req, res);
    break;
  case '/downloadList':
    sendDownloadList(req, res);
    break;
  default:
    sendFile(res, path.join(
      './public', (pathname === '/Emusic') ? '/index.html' : pathname
    ));
  }
}

module.exports = router;
