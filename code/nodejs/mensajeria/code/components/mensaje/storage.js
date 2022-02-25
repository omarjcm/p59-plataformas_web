const Model = require('./model')

function agregarMensaje( dato ) {
    const miObjeto = new Model( dato )
    return miObjeto.save()
}

function obtenerMensajes( filtro ) {
    return new Promise((resolve, reject) => {
        let filter = {}
        if (filtro != null) {
            filter = { chat: filtro }
        }
        Model.find( filter )
            .populate( 'usuario' )
            .populate( {
                path: 'chat',
                populate: {
                    path: 'usuarios'
                }
            } )
            .exec( (error, populated) => {
                if (error)
                    reject( error )

                console.log(populated)

                resolve( populated )
            } )
    })
} 

module.exports = {
    agregar: agregarMensaje,
    obtener: obtenerMensajes,
}