const mongoose = require('mongoose')

const contactoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: false
    },
    telefono: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    mensaje: {
        type: String,
        required: true
    },
    fecha_creacion: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('contacto', contactoSchema)