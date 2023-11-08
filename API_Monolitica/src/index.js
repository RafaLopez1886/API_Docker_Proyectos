const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const clientesRoutes = require("./routes/clientes")
const tipoProyectoRoutes = require("./routes/tipoProyecto")
const universidadesRoutes = require("./routes/universidades")
const etapasRoutes = require("./routes/etapas")


const app = express();

const puerto = process.env.PORT || 4000


//middleware

app.use(express.json())
app.use('/api', clientesRoutes)
app.use('/api', tipoProyectoRoutes)
app.use('/api', universidadesRoutes)
app.use('/api', etapasRoutes)



app.get('/', (req, res)=>{
    res.send('Bienvenidos!')
})

mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log('Conectado a MongoDB'))
.catch((error) => console.error(error));


app.listen(puerto, ()=> console.log('El servidor escucha por el puerto', puerto));