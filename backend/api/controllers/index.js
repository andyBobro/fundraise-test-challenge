const { sync: glob } = require('glob')
const path = require('path')

function requireAllControllers () {
  const controllersPaths = glob('./api/controllers/!(index).js')
  
  const controllers = controllersPaths.reduce((_, p) => {
    const [controllerName] = (p.split('/').slice(-1)[0]).split('.')

    _[controllerName] = require(path.resolve(p))
    return _
  }, {})

  return controllers
}

module.exports = requireAllControllers