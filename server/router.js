const fs = require('fs'),
      util = require('util'),
      path = require('path'),
      url = require('url'),
      querystring = require('querystring')

const readFileAsync = util.promisify(fs.readFile)

const {
  contentType,
  readPostBody,
} = require('./helper')

function handleSign(ctx) {
  return readPostBody(ctx.req).then(data => {
    const { username, password, isSignin } = querystring.parse(data)
    console.log(username, password, isSignin)
    if (username !== '321' &&
        password !== '321' &&
        isSignin === 'true') {
      ctx.status = 200
      console.log('200')
    } else {
      ctx.status = 401
      console.log('401')
    }
  }).catch(err => console.log(err))
}

function sendSong(ctx) {
  return Promise.resolve().then(() => {
    let json = {}
    if (querystring.parse(url.parse(ctx.url).query).id === '002') {
      json = {
        name: 'MyDestiny',
        album: '来自星星的你',
        singer: 'LYn',
        lrc: 'MyDestiny',
        img: 'img/2.jpg',
        audio: 'music/MyDestiny.mp3'
      }
    } else {
      json = {
        name: 'TimeToSayGoodbye',
        album: '...',
        singer: 'Lauren',
        lrc: 'TimeToSayGoodbye',
        img: 'img/0.png',
        audio: 'music/TimeToSayGoodbye.mp3'
      }
    }

    ctx.status = 200
    ctx.set('Content-Type', 'application/json')
    ctx.body = JSON.stringify(json)
  }).catch(err => console.log(err))
}

function sendLrc(ctx) {
  return Promise.resolve().then(() => {
    ctx.status = 200
    ctx.body = `[00:00:00]你打开苦难的里面
[00:00:01]打开了我`
  })
}

function sendSongSheet(ctx) {
  return Promise.resolve().then(() => {
    console.log(querystring.parse(url.parse(ctx.url).query))
    return readFileAsync(path.join('./server/json/songSheet.json'))
  }).then(data => {
    ctx.status = 200
    ctx.set('Content-Type', 'application/json')
    ctx.body = data
  }).catch(err => console.log(err))
}

function sendDownloadList(ctx) {
  return Promise.resolve().then(() => {
    console.log(querystring.parse(url.parse(ctx.url).query))
    return readFileAsync(path.join('./server/json/downloadList.json'))
  }).then(data => {
    ctx.status = 200
    ctx.set('Content-Type', 'application/json')
    ctx.body = data
  }).catch(err => console.log(err))
}

function sendFile(ctx, file) {
  return readFileAsync(file).then(data => {
    ctx.status = 200
    ctx.set('Content-Type', contentType(path.extname(file)))
    ctx.body = data
  }).catch(err => {
    ctx.status = 404
    console.log(err)
  })
}

async function router(ctx, next) {
  const ctxUrl = url.parse(ctx.url),
        pathname = ctxUrl.pathname
  switch(pathname) {
  case '/sign':
    await handleSign(ctx)
    break
  case '/song':
    await sendSong(ctx)
    break
  case '/lrc':
    await sendLrc(ctx)
    break
  case '/songSheet':
    await sendSongSheet(ctx)
    break
  case '/downloadList':
    await sendDownloadList(ctx)
    break
  case '/recommend':
  case '/songSheets':
  case '/rank':
  case '/singers':
  case '/newest':
    await sendFile(ctx, path.join(
      __dirname, './json/',
      path.basename(pathname) + '.json'
    ))
    break
  default:
    await sendFile(ctx, path.join(
      './public', (pathname === '/')
        ? '/index.html'
        : pathname
    ))
  }
  await next()
}

module.exports = router
