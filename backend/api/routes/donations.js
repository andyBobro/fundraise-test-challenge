function donationRoutes (db, controller) {
  const donationsController = new controller({
    db
  })
  return {
    endpoint: '/donations',
    methods: {
      async post (ctx, next) {
        const response = await donationsController.makeResponsePost(ctx)
        
        ctx.response = response
        
        next()
      },
      async get (ctx, next) {
        const response = await donationsController.getTopDonaters(ctx)

        ctx.response = response

        next()
      }
    }
  }
}

module.exports = donationRoutes