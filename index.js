const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

//Base de datos
dbConnection();

// admin_user
// m9O1iTEiefYh0Bvk

app.get('/', (req, res) => {

    res.json({
        ok:true,
        msg: 'Holaa desde la db'
    })

})

app.listen(process.env.port, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.port}`)
})