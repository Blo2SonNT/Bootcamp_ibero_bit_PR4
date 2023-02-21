const modProducto = require('../models/modelProducto')

exports.crearProducto = async(req, res) => {
    try {
        let producto
        producto = new modProducto(req.body)
        await producto.save()
        res.send(producto)
    } catch (error) {
        console.log(error)
        res.status(500).send('Algo pasa al momento de guardar el producto')
    }
}

exports.obtenerProductos = async(req, res) => {
    try {
        let productos
        productos = await modProducto.find()
        res.json(productos)
    } catch (error) {
        console.log(error)
        res.status(500).send('Algo pasa al momento de consultar los productos')
    }
}

exports.eliminarProducto = async(req, res) => {
    try {
        let producto
        producto = await modProducto.findById(req.params.id)
        if (!producto) {
            res.status(404).json({ msg: 'Producto no encontrado en la base de datos' })
        }

        await modProducto.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Producto eliminado satisfactoriamente' })

    } catch (error) {
        console.log(error)
        res.status(500).send('Algo pasa al momento de borrar el producto')
    }
}