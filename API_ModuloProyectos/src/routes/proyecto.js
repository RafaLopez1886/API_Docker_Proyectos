const express = require("express")
const proyectoSchema = require("../models/proyecto")

const router = express.Router();

//Crear Proyecto

router.post('/proyecto', (req, res) => {
    const proyecto = proyectoSchema(req.body);
    proyecto.save().then((data) => res.json(data)).catch((error) => res.json({ message: error }))
});


//Obtener todos los proyectos

router.get('/proyecto', (req, res) => {
    proyectoSchema.find()
        .populate('cliente', 'nombre')
        .populate('tipoProyecto', 'nombre')
        .populate('universidad', 'nombre')
        .populate('etapa', 'nombre')
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});



//Obtener un proyecto especifico

router.get('/proyecto/:id', (req, res) => {
    const { id } = req.params;
    proyectoSchema.findById(id)
        .populate('cliente', 'nombre')
        .populate('tipoProyecto', 'nombre')
        .populate('universidad', 'nombre')
        .populate('etapa', 'nombre')
        .then((data) => res.json(data)).catch((error) => res.json({ message: error }))
});

//Actualizar un proyecto

router.put('/proyecto/:id', (req, res) => {
    const { id } = req.params;
    const { numero, titulo, fechaIniciacion, fechaEntrega, valor, fechaCreacion, fechaActualizacion, cliente, tipoProyecto, universidad, etapa } = req.body;
    proyectoSchema.updateOne({ _id: id }, { $set: { numero, titulo, fechaIniciacion, fechaEntrega, valor, fechaCreacion, fechaActualizacion, cliente, tipoProyecto, universidad, etapa } }).then((data) => res.json(data)).catch((error) => res.json({ message: error }))
});

//Eliminar un proyecto

router.delete('/proyecto/:id', (req, res) => {
    const { id } = req.params;
    proyectoSchema.deleteOne({ _id: id }).then((data) => res.json(data)).catch((error) => res.json({ message: error }))
});

module.exports = router;