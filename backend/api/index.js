const logger = require('koa-logger');
const router = require('@koa/router');
// const koaBody = require('koa-body');
const bodyparser = require('koa-bodyparser')
const Koa = require('koa');
const cors = require('@koa/cors');
const requireAllRoutes = require('./routes/index')
const requireAllControllers = require('./controllers/index')


class API {
  constructor ({
    DB,
    PORT
  }) {
    this.port = PORT
    this.app = new Koa();
    this.db = DB
    this.bodyparser = bodyparser
    this.logger = logger
    this.cors = cors
    this.controllers = requireAllControllers()
    this.routes = requireAllRoutes(this.db, this.controllers)
    this.koaRouter = router
  }

  initMiddlewares () {
    this.app.use(bodyparser())
    this.app.use(this.logger())
    this.app.use(this.cors())
    this.initRoutes()
  }

  initRoutes() {
    Object.values(this.routes).forEach((route) => {
      const {
        init, 
        instance
      } = this.getInstance(route)

      const inited = this[init](instance, route)

      this.app.use(inited.routes()).use(inited.allowedMethods())
    })
  }

  getInstance (route) {
    if (route.prefix && route.routes) {
      const { prefix } = route

      return {
        init: 'initPrefixedRoutes',
        instance: new this.koaRouter({
          prefix
        })
      }
    }

    return {
      init: 'initRoute',
      instance: new this.koaRouter()
    }
  }

  initRoute (instance, {endpoint, methods}) {
    Object.entries(methods).forEach(([method, handler]) => {
      instance[method](endpoint, (ctx, next) => handler(ctx, next))
    })

    return instance
  }

  initPrefixedRoutes (instance, { routes }) {
    routes.forEach((route) => {
      this.initRoute(instance, route)
    })

    return instance
  }

  startServer () {
    this.initMiddlewares()
    this.app.listen(this.port)
  }
}

module.exports = API