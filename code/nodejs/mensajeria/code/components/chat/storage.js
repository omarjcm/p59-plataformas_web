const Model = require('./model')

function agregarChat( chat ) {
    const miObjeto = new Model( chat )
    return miObjeto.save()
}

module.exports = {
    agregar: agregarChat,
}