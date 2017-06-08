const fs = require('fs'),
      path = require('path'),
      url = require('url'),
      querystring = require('querystring');

const {
  contentType,
  readPostBody,
  readFile,
} = require('./helper');

function handleSign(ctx) {
  return readPostBody(ctx.req).then(data => {
    const {username, password, isSignin} = querystring.parse(data);
    console.log(username, password, isSignin);
    if (username !== '321' &&
        password !== '321' &&
        isSignin === 'true') {
      ctx.status = 200;
      console.log('200');
    } else {
      ctx.status = 401;
      console.log('401');
    }
  }).catch(err => console.log(err));
}

function sendSong(ctx) {
  return readPostBody(ctx.req).then(data => {
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

    ctx.status = 200;
    ctx.set('Content-Type', 'application/json');
    ctx.body = JSON.stringify(json);
  }).catch(err => console.log(err));
}

function sendSongSheet(ctx) {
  return readPostBody(ctx.req).then(body => {
    console.log(`body: ${body}`);
    return readFile(path.join('./server/json/songSheet.json'));
  }).then(data => {
    ctx.status = 200;
    ctx.set('Content-Type', 'application/json');
    ctx.body = data;
  }).catch(err => console.log(err));
}

function sendDownloadList(ctx) {
  return readPostBody(ctx.req).then(body => {
    console.log(`body: ${body}`);
    return fs.readFile(path.join('./server/json/downloadList.json'));
  }).then(data => {
    ctx.status = 200;
    ctx.set('Content-Type', 'application/json');
    ctx.body = data;
  }).catch(err => console.log(err));
}

function sendFile(ctx, file) {
  return readFile(file).then(data => {
    ctx.status = 200;
    ctx.set('Content-Type', contentType(path.extname(file)));
    ctx.body = data;
  }).catch(err => {
    ctx.status = 404;
    console.log(err);
  });
}

async function router(ctx, next) {
  const ctxUrl = url.parse(ctx.url),
        pathname = ctxUrl.pathname;
  switch(pathname) {
  case '/POST/sign':
    await handleSign(ctx);
    break;
  case '/GET/song':
    await sendSong(ctx);
    break;
  case '/GET/songSheet':
    await sendSongSheet(ctx);
    break;
  case '/GET/downloadList':
    await sendDownloadList(ctx);
    break;
  case '/GET/recommend':
  case '/GET/songSheets':
  case '/GET/rank':
  case '/GET/singers':
  case '/GET/newest':
    await sendFile(ctx, path.join(
      __dirname, './json/',
      path.basename(pathname) + '.json'
    ));
    break;
  default:
    await sendFile(ctx, path.join(
      './public', (pathname === '/')
        ? '/index.html'
        : pathname
    ));
  }
  await next();
}

module.exports = router;
