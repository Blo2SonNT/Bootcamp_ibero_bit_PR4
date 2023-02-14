const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

require('dotenv').config({ path: "config.env" })


const conectarBD = async() => {
    try {
        console.log("Conectando BD...")
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false
        })

        console.log("Base de datos conectada!!!")

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = conectarBD