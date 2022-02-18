const express = require('express')
const controller = require('./controller')
const response = require('../../network/response')

const routes = express.Router()

routes.get('/', function(req, res){
    controller.getChats( req.params.userId )
        .then((data) => response.success(req, res, data, 200))
        .catch((error) => response.error(req, res, error.descripcion, 400, error.tecnico) )
})

routes.post('/', function(req, res){
    controller.agregarChat( req.body.usuarios )
        .then((data) => response.success(req, res, data, 201))
        .catch((error) => response.error(req, res, error.descripcion, 400, error.tecnico) )
})

module.exports = routes