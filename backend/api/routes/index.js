const { sync: glob } = require('glob')
const path = require('path')

function requireAllRoutes (db, controllers) {
  const routesPaths = glob('./api/routes/!(index).js')
  
  const routes = routesPaths.reduce((_, p) => {
    const [routeName] = (p.split('/').slice(-1)[0]).split('.')

    _[routeName] = require(path.resolve(p))(db, controllers[routeName])

    return _
  }, {})

  return routes
}

module.exports = requireAllRoutes