var estudiantes = [
    'Abel Vega',
    'Abraham Paladines',
    'Alex Reyes',
    'Andres Palma',
    'Bryan Macias',
    'Carlos Coral',
    'Daniel Males',
    'Deker Calderon',
    'Johnny Saavedra',
    'Josue Rea',
    'Lourdes Alejandro',
    'Luis Miranda',
    'Marlon GUano',
    'Isaac Obesso'
]

const pasaste = () => {
    let valor_aleatorio = Math.random()
    if (valor_aleatorio > 0.5) {
        return 'Has pasado el curso de Plataformas Web.'
    } else {
        return 'Te quedaste en el curso de Plataformas Web. Nos vemos el proximo periodo.'
    }
}

const saludar_estudiante = function(dato) {
    console.log( `Hola, ${dato}, tengo un mensaje para ti: ${pasaste()}` )
}

//estudiantes.forEach( saludar_estudiante )

//for (let dato of estudiantes) {
  //  saludar_estudiante(dato)
//}

for (let i=0; i<estudiantes.length; i++) {
    saludar_estudiante( estudiantes[i] )
}

