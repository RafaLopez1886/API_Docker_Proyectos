const express = require("express")
const tipoProyectoSchema = require("../models/tipoProyecto")

const router = express.Router();

//Crear Tipo de Proyecto

router.post('/tipoProyecto', (req, res) => {
    const tipoProyecto = tipoProyectoSchema(req.body);
    tipoProyecto.save().then((data) => res.json(data)).catch((error) => res.json({ message: error }))
});


//Obtener todos los tipos de proyecto

router.get('/tipoProyecto', (req, res) => {
    tipoProyectoSchema.find().then((data) => res.json(data)).catch((error) => res.json({ message: error }))
});

//Obtener un tipo de proyecto

router.get('/tipoProyecto/:id', (req, res) => {
    const { id } = req.params;
    tipoProyectoSchema.findById(id).then((data) => res.json(data)).catch((error) => res.json({ message: error }))
});

//Actualizar un tipo de proyecto

router.put('/tipoProyecto/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, fechaCreacion, fechaActualizacion } = req.body;
    tipoProyectoSchema.updateOne({ _id: id }, { $set: { nombre, fechaCreacion, fechaActualizacion } }).then((data) => res.json(data)).catch((error) => res.json({ message: error }))
});

//Eliminar un tipo de proyecto

router.delete('/tipoProyecto/:id', (req, res) => {
    const { id } = req.params;
    tipoProyectoSchema.deleteOne({ _id: id }).then((data) => res.json(data)).catch((error) => res.json({ message: error }))
});

module.exports = router;