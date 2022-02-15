//const chat = require('../components/chat/network')
//const mensaje = require('../components/mensaje/network')
const usuario = require('../components/usuario/network')

const routes = function( server ) {
    server.use('/usuario', usuario)
//    server.use('/factura', factura)
}

module.exports = routes