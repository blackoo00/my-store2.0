import fs from 'fs'
import path from 'path'
import Router from 'koa-router'

const router = new Router({prefix: '/api'})//定义接口名（详情可看client中actions中的ajax请求）
let subRouter

fs.readdirSync(__dirname)
    .filter(filename =>
        filename !== path.basename(__filename)
    )
    .forEach(filename => {
        subRouter = require(`./${filename}`)
        router.use(subRouter.routes(), subRouter.allowedMethods())
    })

export default router
