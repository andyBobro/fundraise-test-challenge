const schemas = {
  donations: {
    name: {type: String, default: 'Anonimous'},
    amount: Number,
    currency: String,
    date: { type: Date, default: Date.now },
  }
}

module.exports = schemas