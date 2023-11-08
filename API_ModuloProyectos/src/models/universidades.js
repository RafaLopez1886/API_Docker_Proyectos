const mongoose = require("mongoose");

const universidadSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    direccion:{
        type: String,
        required: true
    },
    telefono:{
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

module.exports = mongoose.model('universidad', universidadSchema)