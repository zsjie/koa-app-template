import Koa from 'koa'

import route from '~/lib/route'

export default function(): Koa {
  const app = new Koa()

  app.use(route().middleware())

  return app
}
