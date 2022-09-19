const mongoose = require('mongoose');
require('dotenv').config();
const dbConnection = async() => {
  try {
    mongoose.connect(process.env.DB_CNN)
    console.log('CONNECTION SUCCESS')
  } catch (error) {
    console.log(error)
    throw new Error('Error al iniciar la db ver logs')
  }
}

module.exports =  {
  dbConnection
}