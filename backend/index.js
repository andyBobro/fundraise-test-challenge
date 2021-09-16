const {
  DB_NAME,
  PORT
} = require('./config/constants')
const db = require('./db/index')
const api = require('./api/index')

async function startServer () {
  const DB = new db ({
    DB_NAME
  })
  
  const API = new api({
    DB,
    PORT
  })
  const dbConnection = await DB.initDBConnection()

  DB.prepareSchemasAndModels()

  API.startServer()
}

startServer()