const url = require('url'),
      fs = require('fs'),
      path  = require('path');

function contentType(filename) {
  const ContentType = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'application/x-javascript',
    'png': 'image/png',
    'mp3': 'audio/mp3',
  };
  const type = ContentType[path.extname(filename).slice(1)];
  return (type === void 0) ? 'text/plain' : type;
}

function sendFile(res, file) {
  fs.readFile('./public' + file, (err, data) => {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': contentType(file)});
    res.end(data);
  });
}

function sendJSON(res) {
  const json = {// url: '/recommend'
    songSheets: [
      {name: '12134', src: '/img/0.png'},
      {name: 'uas;flj', src: '/img/0.png'},
      {name: 'sadjf;s', src: '/img/0.png'},
      {name: 'asf;', src: '/img/0.png'},
      {name: 'wpequ', src: '/img/0.png'}
    ],
    songs: [
      {name: '123', singer: 'jas'},
      {name: 'jasf;', singer: 'asdn'},
      {name: '12;z', singer: 'n;z'},
      {name: 'zjx', singer: 'nz'},
      {name: 'pwq', singer: 'pfa'},
      {name: 'p1q', singer: 'pasfp'},
      {name: 'pw23', singer: 'pjafa'},
      {name: 'pwasfj', singer: 'pqwerp'}
    ],
    singers: [
      {name: 'zj;v', src: '/img/0.png'},
      {name: 'as;jf;v', src: '/img/0.png'},
      {name: 'zjasjf', src: '/img/0.png'},
      {name: 'zj;afj', src: '/img/0.png'}
    ]
  };
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(json));
}

function sendSingers(res) {
  const json = {//  url: '/singers' //歌手列表
    singers: [
      {name: '陈奕迅', src: '/img/0.png'},
      {name: '2', src: '/img/0.png'},
      {name: '3', src: '/img/0.png'},
      {name: '4', src: '/img/0.png'},
      {name: '5', src: '/img/0.png'},
    ]
  };
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(json));
}

function sendRank(res) {
  const json = {// url: '/rank' // 排行榜
    top: [ // 飙升榜
      {name: '一丝不挂', singer: '陈奕迅'},
      {name: '暗涌', singer: '王菲'},
    ],
    newest: [ // 新歌榜
      {name: '一丝不挂', singer: '陈奕迅'},
      {name: '暗涌', singer: '王菲'},
    ],
    hot: [ // 热歌榜
      {name: '一丝不挂', singer: '陈奕迅'},
      {name: '暗涌', singer: '王菲'},
    ],
    singer: [ // 歌手榜
      {name: '陈奕迅'},
      {name: '王菲'},
    ]
  };
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(json));
}

function sendNewest(res) {
  const json = {// url: '/newest' // 最新歌曲
    songs: [
      {name: '一丝不挂', singer: '陈奕迅', time: '03:43'},
      {name: '暗涌', singer: '王菲', time: '03:23'},
      {name: '一丝不挂', singer: '陈奕迅', time: '04:43'}
    ]
  };
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(json));
}

function sendSongSheets(res) {
  const json = {// url: '/songSheets'
    songSheets: [
      {name: '12134', src: '/img/0.png'},
      {name: 'uas;flj', src: '/img/0.png'},
      {name: 'sadjf;s', src: '/img/0.png'},
      {name: 'asf;', src: '/img/0.png'},
      {name: 'wpequ', src: '/img/0.png'}
    ]
  };
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(json));
}

function router(req, res) {
  const pathname = url.parse(req.url).pathname;
  console.log(pathname);

  switch(pathname) {
  case '/Asign':
    res.writeHead(200);
    res.end();
    break;
  case '/recommend':
    sendJSON(res);
    break;
  case '/songSheets':
    sendSongSheets(res);
    break;
  case '/newest':
    sendNewest(res);
    break;
  case '/rank':
    sendRank(res);
    break;
  case '/singers':
    sendSingers(res);
    break;
  default:
    sendFile(res, (pathname === '/Emusic') ? '/index.html' : pathname);
  }
}

module.exports = router;
