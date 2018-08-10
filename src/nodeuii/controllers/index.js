import IndexController from './IndexController'
const indexController = new IndexController()
//路由的集成中心
export default (app, router) => {
    app.use(router(_ => {
        _.get('/', indexController.indexHome()),
        _.get('/index', indexController.indexAction())
    }))
}