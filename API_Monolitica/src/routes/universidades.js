const express = require("express")
const universidadSchema = require("../models/universidades")

const router = express.Router();

//Crear Cliente

router.post('/universidades', (req, res) => {
    const universidad = universidadSchema(req.body);
    universidad.save().then((data) => res.json(data)).catch((error) => res.json({ message: error }))
});


//Obtener todos los clientes

router.get('/universidades', (req, res) => {
    universidadSchema.find().then((data) => res.json(data)).catch((error) => res.json({ message: error }))
});

//Obtener un cliente

router.get('/universidades/:id', (req, res) => {
    const { id } = req.params;
    universidadSchema.findById(id).then((data) => res.json(data)).catch((error) => res.json({ message: error }))
});

//Actualizar un cliente

router.put('/universidades/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, direccion, telefono, fechaCreación, fechaActualizacion } = req.body;
    universidadSchema.updateOne({ _id: id }, { $set: { nombre, direccion, telefono, fechaCreación, fechaActualizacion } }).then((data) => res.json(data)).catch((error) => res.json({ message: error }))
});

//Eliminar un cliente

router.delete('/universidades/:id', (req, res) => {
    const { id } = req.params;
    universidadSchema.deleteOne({ _id: id }).then((data) => res.json(data)).catch((error) => res.json({ message: error }))
});

module.exports = router;