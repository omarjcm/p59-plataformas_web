const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mySchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat',
    },
    usuario: {
        type: Schema.ObjectId,
        ref: 'Usuario',
    },
    mensaje: {
        type: String,
        required: true,
    },
    date: Date,
})

const model = mongoose.model('Mensaje', mySchema)
module.exports = model