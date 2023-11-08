const express = require("express")
const clienteSchema = require("../models/clientes")

const router = express.Router();

//Crear Cliente

router.post('/clientes', (req, res) => {
    const cliente = clienteSchema(req.body);
    cliente.save().then((data) => res.json(data)).catch((error) => res.json({ message: error }))
});


//Obtener todos los clientes

router.get('/clientes', (req, res) => {
    clienteSchema.find().then((data) => res.json(data)).catch((error) => res.json({ message: error }))
});

//Obtener un cliente

router.get('/clientes/:id', (req, res) => {
    const { id } = req.params;
    clienteSchema.findById(id).then((data) => res.json(data)).catch((error) => res.json({ message: error }))
});

//Actualizar un cliente

router.put('/clientes/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, email, fechaCreación, fechaActualizacion } = req.body;
    clienteSchema.updateOne({ _id: id }, { $set: { nombre, email, fechaCreación, fechaActualizacion } }).then((data) => res.json(data)).catch((error) => res.json({ message: error }))
});

//Eliminar un cliente

router.delete('/clientes/:id', (req, res) => {
    const { id } = req.params;
    clienteSchema.deleteOne({ _id: id }).then((data) => res.json(data)).catch((error) => res.json({ message: error }))
});

module.exports = router;