const process = require('process')
const Koa = require('koa')
const app = new Koa()

const router = require('./server/router')

app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(router)

const port = process.argv[2] || 3000
app.listen(port, () => console.log(`Server running at http://localhost:/${port}`))
