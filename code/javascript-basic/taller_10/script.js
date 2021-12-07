var docente = {
    nombre: 'Sergio',
    apellido: 'Flores',
    peso: 200
}

const INCREMENTAR_PESO = 5

const aumentar_peso = (persona) => persona.peso += INCREMENTAR_PESO
const disminuir_peso = (persona) => persona.peso -= INCREMENTAR_PESO

const comer_mucho = () => Math.random() < 0.5
const realizar_deportes = () => Math.random() < 0.5

console.log( `Al inicio del anio el docente ${docente.nombre} ${docente.apellido} pesa ${docente.peso} libras.` )

const META = docente.peso - 20

var dias = 0

while( docente.peso > META ) {
    if (comer_mucho()) {
        aumentar_peso( docente )
    }
    if (realizar_deportes()) {
        disminuir_peso( docente )
    }
    dias += 1
    console.log( `${dias} dias` )
    console.log( `${docente.peso} lbs` )
}

console.log( `Al final (${dias} dias) el docente ${docente.nombre} ${docente.apellido} pesa ${docente.peso} libras.` )