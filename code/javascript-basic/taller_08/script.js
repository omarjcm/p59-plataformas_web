function investigador( nombre, apellido, afiliacion, correo_electronico, edad ) {
    this.nombre = nombre
    this.apellido = apellido
    this.afiliacion = afiliacion
    this.correo_electronico = correo_electronico
    this.edad = edad
}

let investigador1 = new investigador('Santiago', 'Bravo Aguirre', 'Universidad Politecnica Salsiana', 'sbravoa1@est.ups.edu.ec', 20)
let investigador2 = new investigador('Oswaldo', 'Zavala', 'Universidad Politecnica Salsiana', 'ozavala@est.ups.edu.ec', 25)

const imprimir_nombre_mayuscula = (objeto) => console.log(`${objeto.nombre.toUpperCase()} ${objeto.apellido}`)

let investigadores = [ investigador1, investigador2 ]
investigadores.forEach( imprimir_nombre_mayuscula )

const imprimir_apellido_mayuscula = (objeto) => console.log(`${objeto.nombre} ${objeto.apellido.toUpperCase()}`)
investigadores.forEach( imprimir_apellido_mayuscula )


console.log('==================================')
console.log('Paso por valor')
console.log('==================================')

const cumpleanios_x_valor = (edad) => {
    edad += 1
}

console.log( investigador1 )
cumpleanios_x_valor( investigador1.edad )
console.log( investigador1 )

// Se crea una funcion que me retorna un objeto modificado sin modificar el original
const cumpleanios_x_valor2 = (objeto) => {
    return {
        ... objeto,
        edad: objeto.edad + 1
    }
}

console.log( investigador2 )
let investigador3 = cumpleanios_x_valor2( investigador2 )
console.log( investigador3 )
console.log( investigador2 )

console.log('==================================')
console.log('Paso por referencia')
console.log('==================================')

// Se crea una funcion que modifica el objeto que recibe como parametro
const cumpleanios_x_referencia = (objeto) => objeto.edad += 1

console.log( investigador1 )
cumpleanios_x_referencia( investigador1 )
console.log( investigador1 )


