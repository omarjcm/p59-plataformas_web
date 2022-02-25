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

async function actualizarMensaje(data) {
    const mensaje = await Model.findOne( {_id:data.id} )
    mensaje.mensaje = data.mensaje
    const resultado = await mensaje.save()
    return resultado
}

async function eliminarMensaje(data) {
    return await Model.deleteOne( {_id:data.id} )
}

module.exports = {
    agregar: agregarMensaje,
    obtener: obtenerMensajes,
    actualizar: actualizarMensaje,
    eliminar: eliminarMensaje,
}