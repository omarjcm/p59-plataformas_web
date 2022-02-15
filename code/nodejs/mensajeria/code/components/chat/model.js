const mongoose = require('mongoose')
const Schema = mongoose.Schema

const miSchema = new Schema( {
    usuarios: [ {
        type: Schema.ObjectId, 
        ref: 'Usuario',
    } ]
} )

const model = mongoose.model( 'Chat', miSchema )
module.exports = model