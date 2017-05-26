const url = require('url'),
      fs = require('fs'),
      path  = require('path');

function contentType(filename) {
  const ContentType = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'application/x-javascript',
    'jpg': 'image/jpg',
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
      {name: 'wpequ', src: '/img/0.png'}
    ],
    songs: [
      {id: '001', name: 'TimeToSayGoodbye', singer: 'Lauren'},
      {id: '002', name: 'MyDestiny', singer: 'LYn'}
    ],
    singers: [
      {name: 'zj;v', src: '/img/0.png'},
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
    ]
  };
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(json));
}

function sendRank(res) {
  const json = {// url: '/rank' // 排行榜
    top: [ // 飙升榜
      {id: '001', name: '一丝不挂', singer: '陈奕迅'},
      {id: '002', name: '暗涌', singer: '王菲'},
    ],
    newest: [ // 新歌榜
      {id: '001', name: '一丝不挂', singer: '陈奕迅'},
      {id: '002', name: '暗涌', singer: '王菲'},
    ],
    hot: [ // 热歌榜
      {id: '001', name: '一丝不挂', singer: '陈奕迅'},
      {id: '002', name: '暗涌', singer: '王菲'},
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
      {id: '001', name: '一丝不挂', singer: '陈奕迅', time: '03:43'},
      {id: '002', name: '暗涌', singer: '王菲', time: '03:23'},
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
    ]
  };
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(json));
}

function keyValueParse(str) {
  let s = str;
  const result = {};
  const regexp = /^([^=]+)=([^\&]+)(?:&*)(.*)/;
  while (s !== '') {
    let match = regexp.exec(s);
    if (!match) throw SyntaxError(s + ' is illegal.');
    result[match[1]] = match[2];
    s = match[3];
  }

  return result;
}

function sendSong(req, res) {
  let body = "";
  req.on('data', (thunk) => {
    body += thunk;
  });

  req.on('end', () => {
    const post = keyValueParse(body);
    console.log(post);

    let json = {};
    if (post.id === '002') {
      json = {// url: '/song'
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
  case '/song':
    sendSong(req, res);
    break;
  default:
    sendFile(res, (pathname === '/Emusic') ? '/index.html' : pathname);
  }
}

module.exports = router;
