const mongoose = require('mongoose')

const contactoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    rutaImg: {
        type: String,
        required: true
    },
    fecha_creacion: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('producto', contactoSchema)