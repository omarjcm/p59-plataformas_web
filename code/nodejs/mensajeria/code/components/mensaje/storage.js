const Model = require('./model')

function agregarMensaje( dato ) {
    const miObjeto = new Model( dato )
    return miObjeto.save()
}

module.exports = {
    agregar: agregarMensaje,
}