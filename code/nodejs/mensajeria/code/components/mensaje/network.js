const express = require('express')
const controller = require('./controller')
const response = require('../../network/response')

const routes = express.Router()

routes.post('/', function(req, res){
    controller.agregarMensaje( req.body )
        .then((data) => response.success(req, res, data, 201))
        .catch((error) => response.error(req, res, error.descripcion, 400, error.tecnico) )
})

module.exports = routes