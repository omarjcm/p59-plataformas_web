// Gestionando el asincronismo.

function saludar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Hola ' + nombre)
            resolve(nombre)
        }, 1000)
    })

}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('bla bla bla...')
            resolve(nombre)
        }, 1000)
    })

}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log(`Adios ${nombre}`)
            console.log('Finalizando conversacion...')
        }, 1000)
    })
}

console.log('Iniciando conversacion...')
saludar('Guillermo')
    .then( (datos) => hablar(datos) )
    .then( (datos) => adios(datos) )
