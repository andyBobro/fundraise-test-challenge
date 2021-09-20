function donationRoutes (db, controller) {
  const donationsController = controller && (new controller({
    db
  }))
  const users = ['vasya', 'petya']
  return {
    prefix: '/users',
    routes: [
      {
        endpoint: '/',
        methods: {
          get (ctx, next) {
            ctx.response.status = 200
            ctx.response.body = {
              users,
              ok: true
            }
        
            next()
          }
        }
      },
      {
        endpoint: '/:id',
        methods: {
          get (ctx, next) {
            const { body } = ctx.request
            ctx.response.status = 200
            ctx.response.body = {
              user: users[body.id],
              ok: true
            }
        
            next()
          }
        }
      }
    ]
  }
}

module.exports = donationRoutes