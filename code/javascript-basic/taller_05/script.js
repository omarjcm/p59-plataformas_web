// Funcion declarativa
function imprimirResultado() {
    console.log( 'Hola mundo' )
}

imprimirResultado()

// Funcion expresiva, o tambien conocida como funcion anonima
const suma = function(a, b) {
    return (a + b)
}

let resultado = suma(2, 5)
console.log( resultado )

// Funcion flecha
const suma2 = (a, b) => a + b

let resultado2 = suma2(2, 5)
console.log( resultado2 )

const suma3 = (a, b) => {
    c = a + b
    return c
}

let resultado3 = suma3(2, 5)
console.log( resultado3 )