const express = require('express');
const conectarBD = require('./config/db')


let app = express();
conectarBD();

app.use(express.json())

app.use('/api', require('./routes/routes'))

app.listen(4000, () => {
    console.log("Ejecutando en el servidor...");
})