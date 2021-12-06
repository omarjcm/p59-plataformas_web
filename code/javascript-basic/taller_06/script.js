let articulos = [
    { nombre: 'TV Sony', modelo: 'KD-65X85J LA8', costo: 1999 },
    { nombre: 'Audifonos Inalambricos', modelo: 'WH-CH710N', costo: 259 },
    { nombre: 'Auriculares inalámbricos con Noise Cancelling', modelo: 'WF1000XM4/BMUC', costo: 321.9 },
    { nombre: 'Smart TV Samsung', modelo: '55" AU7000 UHD 4K', costo: 884 },
    { nombre: 'Laptop Lenovo', modelo: 'Core i3 1ma, 1tb, 12gb, touch, 15 pulg', costo: 656.25 },
    { nombre: 'Laptop Dell', modelo: 'Core i7 11va, 512gb ssd, 16gb, tec iluminado', costo: 1207.51 }
]

const imprimirArticulo = (objeto) => {
    console.log( `${objeto.nombre} - ${objeto.modelo}, Valor: ${objeto.costo}` )
}

console.log('==================================')
console.log('Uso del FOREACH')
console.log('==================================')

articulos.forEach( function(elemento) {
    console.log( elemento.nombre )
} )

articulos.forEach( imprimirArticulo )

console.log('==================================')
console.log('Uso del SOME')
console.log('==================================')

let articulos_baratos = articulos.some( (articulo) => articulo.costo <= 100 )
console.log( articulos_baratos )

const existen_articulos_caros = (dato) => dato.costo > 1000

let articulos_caros = articulos.some( existen_articulos_caros )
console.log( articulos_caros )

console.log('==================================')
console.log('Uso del FILTER')
console.log('==================================')

let articulos_filtrados = articulos.filter( (articulo) => articulo.costo <= 1000 )
articulos_filtrados.forEach( imprimirArticulo )
console.log('==================================')
let articulos_caros2 = articulos.filter( existen_articulos_caros )
articulos_caros2.forEach( imprimirArticulo )

console.log('==================================')
console.log('Uso del MAP')
console.log('Retorna una lista con el atributo (solo uno) modificado')
console.log('==================================')

let articulos_modificados = articulos.map( (dato) => dato.nombre.toUpperCase() )
articulos_modificados.forEach( (dato) => console.log(dato) )

console.log('==================================')
console.log('Uso de FIND')
console.log('Retorna el primer valor que encuentra')
console.log('==================================')

let articulo_encontrado = articulos.find( (dato) => dato.nombre == 'TV Sony' )
console.log( articulo_encontrado )

let articulo_encontrado2 = articulos.find( (dato) => dato.costo > 1000 )
console.log( articulo_encontrado2 )