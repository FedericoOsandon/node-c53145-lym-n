const express = require('express')

const app = express()

app.get('/productdetail/:pid', (req, res)=>{
    logger.info('parametro: ', req.params)
    // logger.info(req.query)
    // logger.info(req.body)
    res.send('bienvenidos al server') // manda al cliente esta resp un string biebn......
})
app.get('/nombre/:nombre/:apellido', (req, res) => {
    const { nombre } = req.params
    res.send(`El nombre enviado desde el cliente es ${nombre} ${req.params.apellido}`)
})

app.get('/despedida', (req, res) => {
    res.send('by world')
})

app.listen(8080, error => {
    logger.info('Escuchando el puerto 8080')
})