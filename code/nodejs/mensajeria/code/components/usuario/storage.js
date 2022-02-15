const Model = require('./model')

function agregarUsuario( usuario ) {
    const miUsuario = new Model( usuario )
    return miUsuario.save()
}

module.exports = {
    agregar: agregarUsuario,
}