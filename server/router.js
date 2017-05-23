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

function router(req, res) {
  const pathname = url.parse(req.url).pathname;
  console.log(pathname);

  switch(pathname) {
  case '/recommend':
  case '/songSheets':
    sendJSON(res);
    break;
  case '/Asign':
    res.writeHead(200);
    res.end();
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
