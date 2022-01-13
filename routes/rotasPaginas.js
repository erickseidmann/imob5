const express = require('express')
const router = express.Router()


router.get('/', (req,res)=>{
    res.render('index')
})

router.get('/comprar', (req,res)=>{
    res.render('comprar')
})

router.get('/vender', (req,res)=>{
    res.render('vender')
})

router.get('/alugar', (req,res)=>{
    res.render('alugar')
})

router.get('/lancamentos', (req,res)=>{
    res.render('lancamentos')
})

router.get('/anunciar', (req,res)=>{
    res.render('anunciar')
})

router.get('/servicos', (req,res)=>{
    res.render('servicos')
})

router.get('/simular', (req,res)=>{
    res.render('simular')
})

router.get('/cadastro', (req,res)=>{
    res.render('cadastro')
})

router.get('/login', (req,res)=>{
    res.render('login')
}) 

//Rota Temporária
router.get('/devFooter', (req,res)=>{
    res.render('devFooter')
}) 



module.exports = router