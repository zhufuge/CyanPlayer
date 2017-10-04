const fs = require('fs'),
      path = require('path'),
      url = require('url'),
      querystring = require('querystring')
const Router = require('koa-router')
const serve = require('koa-static')

const readFileAsync = require('util').promisify(fs.readFile)
const { contentType, readPostBody } = require('./helper')
const handleError = (err) => console.log(err)

const router = new Router()

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
const home = (ctx) => sendFile(ctx, path.join('./public', '/index.html'))
const sign = (ctx) => readPostBody(ctx.req).then(data => {
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
}).catch(handleError)
const songPane = (ctx) => Promise.resolve().then(() => {
  ctx.status = 200
  ctx.set('Content-Type', 'application/json')
  ctx.body = JSON.stringify(
    Number.parseInt(querystring.parse(url.parse(ctx.url).query).id) % 2 === 0
      ? {
        name: 'MyDestiny',
        singer: 'LYn',
        img: 'img/2.jpg',
      } : {
        name: 'TimeToSayGoodbye',
        singer: 'Lauren',
        img: 'img/0.png',
      }
  )
}).catch(handleError)
const song = (ctx) => Promise.resolve().then(() => {
  ctx.status = 200
  ctx.set('Content-Type', 'application/json')
  ctx.body = JSON.stringify(
    querystring.parse(url.parse(ctx.url).query).id === '001'
      ? {
        name: 'MyDestiny',
        album: '来自星星的你',
        singer: 'LYn',
        lrc: 'MyDestiny',
        img: '/img/2.jpg',
        audio: 'music/MyDestiny.mp3'
      } : {
        name: 'TimeToSayGoodbye',
        album: '...',
        singer: 'Lauren',
        lrc: 'TimeToSayGoodbye',
        img: '/img/0.png',
        audio: 'music/TimeToSayGoodbye.mp3'
      }
  )
}).catch(handleError)
const lrc = (ctx) => Promise.resolve().then(() => {
  ctx.status = 200
  ctx.body = `[00:00:00]你打开苦难的里面
[00:00:01]打开了我`
}).catch(handleError)
const sheet = (ctx) => Promise.resolve().then(() => {
  console.log(querystring.parse(url.parse(ctx.url).query))
  return readFileAsync(path.join('./server/json/songSheet.json'))
}).then(data => {
  ctx.status = 200
  ctx.set('Content-Type', 'application/json')
  ctx.body = data
}).catch(handleError)
const downloadList = (ctx) => Promise.resolve().then(() => {
  console.log(querystring.parse(url.parse(ctx.url).query))
  return readFileAsync(path.join('./server/json/downloadList.json'))
}).then(data => {
  ctx.status = 200
  ctx.set('Content-Type', 'application/json')
  ctx.body = data
}).catch(handleError)
const jsonFile = (ctx) => sendFile(ctx, path.join(
  __dirname,
  './json/',
  path.basename(url.parse(ctx.url).pathname) + '.json'
))

const staticFile = (ctx) => sendFile(
  ctx,
  path.join('./public' + url.parse(ctx.url).pathname)
)

router
  .get('/', home)
  .get('/page/:id', home)
  .get('/songPane', songPane)
  .get('/song', song)
  .get('/lrc', lrc)
  .get('/sheet', sheet)
  .get('/downloadList', downloadList)
  .get('/recommend', jsonFile)
  .get('/songSheets', jsonFile)
  .get('/rank', jsonFile)
  .get('/singers', jsonFile)
  .get('/newest', jsonFile)
  .post('/sign', sign)
  .all('*', serve(path.join('./public')))

module.exports = (app) => app
  .use(router.routes())
  .use(router.allowedMethods())
