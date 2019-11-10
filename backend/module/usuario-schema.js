const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    number: {
        type: String,
        require: true
    },
    sex: {
        type: String,
        require: true
    },
    dateOfB: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    schedule: {
        type: String,
        require: true
    }
    
})


module.exports = mongoose.model('usuario', usuarioSchema)