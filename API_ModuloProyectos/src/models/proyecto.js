const mongoose = require("mongoose");

const proyectoSchema = mongoose.Schema({
    numero:{
        type: Number,
        required: true
    },
    titulo:{
        type: String,
        required: true
    },
    fechaIniciacion:{
        type: Date,
        required: true
    },
    fechaEntrega:{
        type: Date,
    },
    valor: {
        type: Number,
        required: true
    },
    fechaCreacion:{
        type: Date,
    },
    fechaActualizacion:{
        type: Date,
    },
    cliente:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    tipoProyecto:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tipoProyecto'
    },
    universidad:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'universidad'
    },
    etapa:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'etapa'
    }

});

module.exports = mongoose.model('Proyecto', proyectoSchema)