const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuarioSchema = new Schema( {
    usuario: String,
    nombre: String,
    apellido: String
} )

const model = mongoose.model( 'Usuario', usuarioSchema )
module.exports = model