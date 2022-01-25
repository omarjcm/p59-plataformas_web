const fetch = require('./utils/fetch')
const API = 'https://rickandmortyapi.com/api/character/'

function obtenerPersonaje(id) {
    return fetch(`${API}${id}`)
}

let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let promesas = ids.map( id => obtenerPersonaje(id) )

Promise
    .all( promesas )
    .then( data => {
        for (let i=0; i<data.length; i++) {
            console.log( data[i].id + ' ' + data[i].name )
        }
    } )