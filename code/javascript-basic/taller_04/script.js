// Creacion de objetos de manera estatica
let miAuto = {
    marca: 'Chevrolet',
    modelo: 'Groove',
    anio: 2021,
    detalle_auto: function() {
        console.log( 'Auto: ' + this.marca + '-' + this.modelo + ' Anio: ' + this.anio )
    }
}

console.log(miAuto.marca)
miAuto.detalle_auto()

// Creacion de objetos de manera dinamica
function auto( marca, modelo, anio ) {
    this.marca = marca
    this.modelo = modelo
    this.anio = anio
    this.detalle_auto = function() {
        console.log( `Auto: ${this.marca}-${this.modelo} Anio: ${this.anio}` )
    }
}

let auto_nuevo = new auto('Tesla', 'Modelo 3', 2020)
auto_nuevo.detalle_auto()

