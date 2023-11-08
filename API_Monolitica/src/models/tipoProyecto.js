const mongoose = require("mongoose");

const tipoProyectoSchema = mongoose.Schema({
    nombre:{
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

module.exports = mongoose.model('tipoProyecto', tipoProyectoSchema)