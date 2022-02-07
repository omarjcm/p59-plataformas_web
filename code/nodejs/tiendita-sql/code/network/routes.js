const pais = require('../components/pais/network')
const factura = require('../components/factura/network')

const routes = function( server ) {
    server.use('/pais', pais)
    server.use('/factura', factura)
}

module.exports = routes