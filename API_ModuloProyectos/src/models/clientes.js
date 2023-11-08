const mongoose = require("mongoose");

const clienteSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    fechaCreacion:{
        type: Date,
        required: true
    },
    fechaActualizacion:{
        type: Date,
    }
});

module.exports = mongoose.model('Cliente', clienteSchema)