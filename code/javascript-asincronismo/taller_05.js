const fetch = require('./utils/fetch')
const API = 'https://rickandmortyapi.com/api/character/'

function obtenerPersonaje(id) {
    return fetch(`${API}${id}`)
}

for ( let i=1; i<=10; i++ ) {
    obtenerPersonaje(i)
        .then( (datos) => {
            console.log( datos.id ) + console.log( datos.name )
        } )
}