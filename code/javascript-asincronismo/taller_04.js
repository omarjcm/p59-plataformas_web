// Gestionando el asincronismo.

async function saludar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Hola ' + nombre)
            resolve(nombre)
        }, 1000)
    })

}

async function hablar() {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('bla bla bla...')
            resolve()
        }, 1000)
    })

}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log(`Adios ${nombre}`)
            console.log('Finalizando conversacion...')
        }, 1000)
    })
}

async function main() {
    console.log('Iniciando conversacion...')
    let nombre = await saludar('Guillermo')
    await hablar()
    await adios(nombre)
}

main()

