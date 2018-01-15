const mongoose = require('mongoose')
const stringConn = 'mongodb://127.0.0.1:27017/admin'

mongoose.connect(stringConn, {
  useMongoClient: true
})

mongoose.Promise = global.Promise
const db = mongoose.connection

db.on('error', console.error.bind('error en la conexion'))

module.exports = db