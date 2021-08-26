import Koa from 'koa'
import accesslog from 'koa-accesslog'

import route from '~/lib/route'

export default function(): Koa {
  const app = new Koa()

  app.proxy = true

  app.use(accesslog())
  app.use(route().middleware())

  return app
}
