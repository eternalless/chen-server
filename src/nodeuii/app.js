import Koa from 'koa'
import router from 'koa-simple-router'
import render from 'koa-swig'
import serve from 'koa-static'
import co from 'co'
import config from './config'
import controllerInit from './controllers'
const app = new Koa()
app.context.render = co.wrap(render({
    root:config.viewDir,
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    varControls: ["[[","]]"],
    writeBody: false
}));
controllerInit(app, router)
app.use(serve(config.staticDir))
console.log(config)
app.listen(config.port, () => {
    console.log(`success listening on ${config.port}`)
})