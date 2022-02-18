const storage = require('./storage')

function agregarChat( usuarios ) {
    return new Promise((resolve, reject) => {
        if (!usuarios || !Array.isArray( usuarios )) {
            return reject( { descripcion:'Los datos son incorrectos', tecnico:null } )
        }
        const chat = {
            usuarios: usuarios,
        }
        resolve( storage.agregar( chat ) )
    })
}

function getChats( data ) {
    return storage.get( data )
}

module.exports = {
    agregarChat,
    getChats,
}