const storage = require('./storage')

function agregarMensaje( dato ) {
    return new Promise((resolve, reject) => {
        let mensaje = {
            chat: dato.chat,
            usuario: dato.usuario,
            mensaje: dato.mensaje,
            date: new Date(),
        }
        storage.agregar( mensaje )
        resolve(mensaje)    
    })
}

function obtenerMensajes( filtro ) {
    return new Promise((resolve, reject) => {
        resolve( storage.obtener( filtro ) )
    })
}

function actualizarMensaje(data) {
    return new Promise((resolve, reject) => {
        resolve( storage.actualizar( data ) )
    })    
}

function eliminarMensaje(data) {
    return new Promise((resolve, reject) => {
        resolve( storage.eliminar( data ) )
    })
}

module.exports = {
    agregarMensaje,
    obtenerMensajes,
    actualizarMensaje,
    eliminarMensaje,
}