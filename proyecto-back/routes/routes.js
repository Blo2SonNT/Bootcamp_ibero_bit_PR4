const express = require('express')
const router = express.Router()

const contactoController = require('../controllers/contactoController')
const productoController = require('../controllers/productoController')

//ruta contacto
router.get('/obtener-contactos', contactoController.obtenerContactos)
router.post('/crear-contacto', contactoController.crearContacto)
router.put('/actualizar-contacto', contactoController.actualizarContacto)
router.delete('/eliminar-contacto', contactoController.eliminarContacto)


//Ruta productos
router.post('/crear-producto', productoController.crearProducto)
router.get('/productos', productoController.obtenerProductos)
router.delete('/eliminar-producto/:id', productoController.eliminarProducto)
router.get('/productos/:id', productoController.obtenerProducto)
router.put('/actualizar-producto/:id', productoController.actualizarProducto)

module.exports = router