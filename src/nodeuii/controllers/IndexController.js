import IndexModel from '../models/IndexModel'
class IndexController {
    constructor(){}
    indexHome(){
      return async (ctx, next) => {
        ctx.body =  '第一次node server架构， 有点意思'
      }
    }
    indexAction(){
        return async (ctx, next) => {
            const IndexModelIns = new IndexModel()
            const result = await IndexModelIns.getData()
            ctx.body =  await ctx.render('index',{
                data: result
            });
        }
    }
}
export default IndexController