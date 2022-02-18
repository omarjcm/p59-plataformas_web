const Model = require('./model')

function agregarChat( chat ) {
    const miObjeto = new Model( chat )
    return miObjeto.save()
}

function getChats(data) {
    return new Promise((resolve, reject) => {
        let filter = {}
        if (data) {
            filter = { _id: data }
        }

        Model.find(filter)
            .populate('usuarios')
            .exec( (error, populated) => {
                if (error)
                    return reject(error)
                else
                    return resolve(populated)
            } )
    })
}

module.exports = {
    agregar: agregarChat,
    get: getChats,
}