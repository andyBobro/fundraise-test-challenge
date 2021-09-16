function donationRoutes (db, controller) {
  const donationsController = new controller({
    db
  })
  return {
    endpoint: '/donations',
    methods: {
      post (ctx, next) {
        const response = donationsController.makeResponse(ctx)
        
        ctx.response = response
        next()
      },
      get (ctx, next) {
        // db.getRecord(payload)
        ctx.response.status = 200
        ctx.response.body = 'get'
        next()
      }
    }
  }
}

module.exports = donationRoutes