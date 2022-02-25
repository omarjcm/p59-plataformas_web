const express = require('express')
const controller = require('./controller')
const response = require('../../network/response')

const routes = express.Router()

routes.post('/', function(req, res){
    controller.agregarMensaje( req.body )
        .then((data) => response.success(req, res, data, 201))
        .catch((error) => response.error(req, res, error.descripcion, 400, error.tecnico) )
})

routes.get('/', function(req, res) {
    const filtrarMensaje = req.body.chat || null
    controller.obtenerMensajes(filtrarMensaje)
        .then((dato) => {
            response.success(req, res, dato, 200)
        })
        .catch(((error) => {
            response.error(req, res, error.descripcion, 500, error.tecnico)
        }))
})

routes.patch('/', function(req, res) {
    controller.actualizarMensaje(req.body)
        .then((dato) => {
            response.success(req, res, dato, 200)
        })
        .catch(((error) => {
            response.error(req, res, error.descripcion, 500, error.tecnico)
        }))
})

routes.delete('/', function(req, res) {
    controller.eliminarMensaje(req.body)
        .then((dato) => {
            response.success(req, res, dato, 200)
        })
        .catch(((error) => {
            response.error(req, res, error.descripcion, 500, error.tecnico)
        }))
})

module.exports = routes