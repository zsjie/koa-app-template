import Router from 'koa-joi-router'

import * as greetingApi from './greeting'

const router = Router()

router.get('/greeting', greetingApi.greet)

export default router
