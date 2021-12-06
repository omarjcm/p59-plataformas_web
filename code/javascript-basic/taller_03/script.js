var texto = 'HOLA MUNDO'

let texto2 = 'hola mundo'

console.log( texto )
console.log( texto2 )
//console.log( texto3 )

function print( ) {
    let texto3 = texto + ' UPS.'
    console.log( texto3 )

    for (let i=0; i<10; i++) {
        console.log( i )
    }

    //console.log(i)
    console.log(j)

    for (var j=0; j<10; j++) {
        console.log( j )
    }

    console.log(j)
}

print()

const MAXIMO_PUNTAJE = 20

MAXIMO_PUNTAJE = MAXIMO_PUNTAJE + 10

console.log( MAXIMO_PUNTAJE )