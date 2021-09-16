const { currencies } = require('../../config/constants')
const { donations: messages } = require('../../config/messages')

class donationsController {
  constructor({
    db
  }) {
    this.db = db
  }

  verifyDonationPayload (payload) {
    const values = [this.verifyCurrency(payload.currency), this.verifyAmount(payload.amount)]
    const res = values.every((v) => v) 
    const errors = !res && ({
      currency: !values[0],
      amount: !values[1]
    })

    return {
      valid: res,
      errors
    }
  }

  verifyCurrency (currency) {
    return currencies.map((c) => c.code).includes(currency)
  }

  verifyAmount (amount) {
    return !!amount
  }

  makeResponse (ctx) {
    const validated = this.verifyDonationPayload(ctx.request.body)

    if (validated.valid) {
      this.saveDonate(ctx.request.body)
      return this.success (ctx)
    }
    
    return this.error(ctx.response, validated.errors)
  }

  success (ctx) {
    const { response } = ctx

    response.status = 200
    response.body = messages.success

    return response
  }

  error (response, errors) {  
    const msgs = Object.entries(errors).reduce((_, [key, error]) => {
      if (error) {
        _.push(messages.errors[key])
      }

      return _
    }, [])

    response.status = 400
    response.body = msgs

    return response
  }

  async saveDonate (donate) {
    await this.db.createRecord('donations', donate)
  }
}

module.exports = donationsController