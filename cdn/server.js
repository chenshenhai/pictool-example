const Koa = require('koa')
const path = require('path')
const static = require('koa-static')

const app = new Koa()

const staticPath = './'

app.use(static(
  path.join( __dirname,  staticPath)
))

app.listen(3000, () => {
  console.log('[pictool-example/cdn] starting at port 3000');
  console.log('http://127.0.0.1:3000/example/index.html');
})
