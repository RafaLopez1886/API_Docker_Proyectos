const mongoose = require("mongoose");

const etapaSchema = mongoose.Schema({
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

module.exports = mongoose.model('etapa', etapaSchema)