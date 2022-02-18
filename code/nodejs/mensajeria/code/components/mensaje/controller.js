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

module.exports = {
    agregarMensaje,
}