const express = require('express')
const app = express()

//Configurações
app.set('view engine', 'ejs')
app.use(express.static('public'))

//Rotas
const rotasPaginas = require('./routes/rotasPaginas')
app.use('/', rotasPaginas)

//Servidor
app.listen(3000,()=>{
    console.log('Servidor Rodando')
})