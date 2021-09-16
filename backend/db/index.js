const mongoose = require('mongoose'); 
const schemasInitials = require('./schemas')

class DB {
  constructor ({
    DB_NAME
  }) {
    this.DB_CONNECTION_STRING = `mongodb://localhost:27017/${DB_NAME}`
    this.mongoose = mongoose
    this.schemasInitials = schemasInitials
    this.schemas = {}
    this.models = {}
  }

  prepareSchemasAndModels () {
    Object.entries(this.schemasInitials).forEach(([key, value]) => {
      this.schemas[key] = new this.mongoose.Schema(value),
      this.models[key] = new mongoose.model(key, this.schemas[key])
    })
  }

  createRecord(name, payload) {
    return this.models[name].create(payload)
  }

  async getRecord(name, params, sort, limit) {
    let result = await this.models[name].find(params)

    result = (sort && (await result.sort(sort)))
    result = (limit && (await result.limit(limit)))

    return result
  }

  async initDBConnection () {
    try {
      return this.mongoose.connect(this.DB_CONNECTION_STRING)
    } catch (e) {
      console.error(`DB connection failed: ${e}`)
    }
  }
}

module.exports = DB