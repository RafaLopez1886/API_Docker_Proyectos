const express = require("express")
const etapaSchema = require("../models/etapas")

const router = express.Router();

//Crear Etapa

router.post('/etapas', (req, res) => {
    const etapa = etapaSchema(req.body);
    etapa.save().then((data) => res.json(data)).catch((error) => res.json({ message: error }))
});


//Obtener todos los clientes

router.get('/etapas', (req, res) => {
    etapaSchema.find().then((data) => res.json(data)).catch((error) => res.json({ message: error }))
});

//Obtener un cliente

router.get('/etapas/:id', (req, res) => {
    const { id } = req.params;
    etapaSchema.findById(id).then((data) => res.json(data)).catch((error) => res.json({ message: error }))
});

//Actualizar un cliente

router.put('/etapas/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, fechaCreación, fechaActualizacion } = req.body;
    etapaSchema.updateOne({ _id: id }, { $set: { nombre, fechaCreación, fechaActualizacion } }).then((data) => res.json(data)).catch((error) => res.json({ message: error }))
});

//Eliminar un cliente

router.delete('/etapas/:id', (req, res) => {
    const { id } = req.params;
    etapaSchema.deleteOne({ _id: id }).then((data) => res.json(data)).catch((error) => res.json({ message: error }))
});

module.exports = router;