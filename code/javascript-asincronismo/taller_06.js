const fetch = require('./utils/fetch')
const API = 'https://rickandmortyapi.com/api/character/'

function obtenerPersonaje(id) {
    return fetch(`${API}${id}`)
}

obtenerPersonaje(1)
    .then( (datos) => {
        console.log( datos.id ) + console.log( datos.name )
        return obtenerPersonaje(2)
    } )
    .then( (datos) => {
        console.log( datos.id ) + console.log( datos.name )
        return obtenerPersonaje(3)
    } )
    .then( (datos) => {
        console.log( datos.id ) + console.log( datos.name )
        return obtenerPersonaje(4)
    } )
    .then( (datos) => {
        console.log( datos.id ) + console.log( datos.name )
        return obtenerPersonaje(5)
    } )
    .then( (datos) => {
        console.log( datos.id ) + console.log( datos.name )
    } )
