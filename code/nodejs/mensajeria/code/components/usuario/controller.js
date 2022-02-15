const storage = require('./storage')

function agregarUsuario( usuario ) {
    return new Promise((resolve, reject) => {
        if (usuario.usuario == null || usuario.nombre == null  || usuario.apellido == null) {
            return reject( { descripcion:'Los datos son incorrectos', tecnico:null } )
        }

        resolve( storage.agregar( usuario ) )
    })
}

module.exports = {
    agregarUsuario,
}