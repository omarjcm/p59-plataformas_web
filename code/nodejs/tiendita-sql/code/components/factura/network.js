const express = require('express')
const controller = require('./controller')
const response = require('../../network/response')

const routes = express.Router()

routes.get('/', function(req, res) {
    const filtroFactura = req.query.texto || null
    controller.obtenerFacturas( filtroFactura )
        .then((data) => response.success(req, res, data))
        .catch((error) => response.error(req, res, error) )
})

routes.post('/', function(req, res) {
    controller.agregarFactura( req.body )
        .then((data) => response.success(req, res, data))
        .catch((error) => response.error(req, res, error) )
})

module.exports = routes