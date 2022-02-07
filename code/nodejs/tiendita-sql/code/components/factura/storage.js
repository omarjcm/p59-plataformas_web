const pool = require('../../bd')

async function obtenerFacturas( filtroFactura ) {
    let results = null
    if (filtroFactura) {
        results = await pool.query('SELECT * FROM factura WHERE id_factura = $1', [ filtroFactura ])
    } else {
        results = await pool.query('SELECT * FROM factura;')
    }
    return results.rows
}

async function agregarFactura( factura ) {
    const cliente = await pool.connect()
    try {
        await cliente.query('BEGIN')

        const res_id_factura = await cliente.query('SELECT MAX(id_factura) as id_factura FROM factura;')
        let id_factura = res_id_factura.rows[0].id_factura
        id_factura = id_factura + 1

        const res_factura = await cliente.query('INSERT INTO factura(id_factura, fecha_emision, valor_total, ref_empleado, ref_cliente) VALUES($1, $2, $3, $4, $5);', [id_factura, factura.fecha_emision, factura.valor_total, factura.empleado, factura.cliente])

        let res_detalle = null
        for (let detalle of factura.detalles) {
            const res_id_detalle = await cliente.query('SELECT MAX(id_factura_detalle) as id_factura_detalle FROM factura_detalle;')
            let id_factura_detalle = res_id_detalle.rows[0].id_factura_detalle
            id_factura_detalle = id_factura_detalle+1
            res_detalle = await cliente.query('INSERT INTO factura_detalle(id_factura_detalle, cantidad, cantidad_x_valor, ref_factura, ref_producto) VALUES($1, $2, $3, $4, $5);', [id_factura_detalle, detalle.cantidad, detalle.cantidad_x_valor, id_factura, detalle.producto])
        }

        await cliente.query('COMMIT')
        return factura
    } catch(error) {
        await cliente.query('ROLLBACK')
        return error
    }
}

module.exports = {
    obtener: obtenerFacturas, 
    agregar: agregarFactura,
}