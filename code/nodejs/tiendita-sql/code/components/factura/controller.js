const storage = require('./storage')

function obtenerFacturas( filtroFactura ) {
    return new Promise((resolve, reject) => {
        resolve( storage.obtener( filtroFactura ) )
    })
}

function agregarFactura( factura ) {
    return new Promise((resolve, reject) => {
        if (factura.fecha_emision == null || factura.valor_total == null || factura.empleado == null || factura.cliente == null) {
            return reject('No existen los datos')
        }
        resolve( storage.agregar( factura ) )
    })
}

module.exports = {
    obtenerFacturas,
    agregarFactura,
}