const express = require('express')
const app = express()
const cors = require('cors')
require('./db/mongodb')
const RutasAPI = require('./routes')

app.use(express.json())
app.use(cors())

app.get('/', (req,res) =>{
    res.send('Servidor Conectado')
})

app.use('/api/v1', RutasAPI)

const PORT = 4003

app.listen(PORT, () =>{
    console.log(`Servidor conectado en el puerto ${PORT}`)
})