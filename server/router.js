const fs = require('fs'),
      path = require('path');

const {
  contentType,
  readPostBody,
} = require('./helper');

async function sendFile(ctx, file) {
  try {
    const data = fs.readFileSync(file);
    ctx.status = 200;
    ctx.set('Content-Type', contentType(path.extname(file)));
    ctx.body = data;
  } catch(err) {
    ctx.status = 404;
    console.log(err);
  }
}

function sendSong(req, res) {
  readPostBody(req, (data) => {
    let json = {};
    if (data.id === '002') {
      json = {
        name: 'MyDestiny',
        album: '来自星星的你',
        singer: 'LYn',
        lrc: '/lrc/qsx.lrc',
        img: 'img/2.jpg',
        audio: 'music/MyDestiny.mp3'
      };
    } else {
      json = {
        name: 'TimeToSayGoodbye',
        album: '...',
        singer: 'Lauren',
        lrc: '/lrc/qsx.lrc',
        img: 'img/0.png',
        audio: 'music/TimeToSayGoodbye.mp3'
      };
    }

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(json));
  });
}

async function handleSign(ctx) {
  await readPostBody(ctx.req)
    .then((data) => {
      console.log(data);
      if (data.username !== "321" &&
          data.password !== "321" &&
          data.isSignin === "true") {
        ctx.status = 200;
        console.log('200');
      } else {
        ctx.status = 401;
        console.log('401');
      }
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

function router(ctx) {
  const url = ctx.url;
  switch(url) {
  // case '/Asign':
  //   handleSign(ctx);
  //   break;
  // case '/recommend':
  // case '/songSheets':
  // case '/rank':
  // case '/singers':
  // case '/newest':
  //   sendFile(ctx, path.join('./server/json', + '.json'));
  //   break;
  // case '/song':
  //   sendSong(req, res);
  //   break;
  // case '/songSheet':
  //   sendSongSheet(req, res);
  //   break;
  // case '/downloadList':
  //   sendDownloadList(req, res);
  //   break;
  default:
    sendFile(ctx, path.join(
      './public', (url === '/') ? '/index.html' : url
    ));
  }
}

module.exports = router;
