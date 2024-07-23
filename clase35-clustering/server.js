const express = require('express')

const app = express()
const PORT = 8080

app.get('/', (req, res) => {
    res.send('hello Docker app')
})

app.get('/simple', (req, res) => {
    let sum = 0
    for (let i = 0; i < 1000000; i++) {
        sum += i        
    }
    res.send({
        status:'success', 
        message: `El worker ${process.pid} a atendido la petición: La suma es = ${sum}`
    })
})

app.get('/compleja', (req, res) => {
    let sum = 0
    for (let i = 0; i < 5e8; i++) {
        sum += i        
    }
    res.send({
        status:'success', 
        message: `El worker ${process.pid} a atendido la petición: La suma esLa suma es ${sum}`
    })
})
// 

    
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
