const express = require('express')

const app = express()

const users = [ // una base de dato
    { id: 1, nombre: 'nombre 1', apellido: 'apellido 1', genero: 'F' },
    { id: 2, nombre: 'nombre 2', apellido: 'apellido 2', genero: 'F' },
    { id: 3, nombre: 'nombre 3', apellido: 'apellido 3', genero: 'M' },
    { id: 4, nombre: 'nombre 4', apellido: 'apellido 4', genero: 'F' },
    { id: 5, nombre: 'nombre 5', apellido: 'apellido 5', genero: 'M' },
    { id: 6, nombre: 'nombre 6', apellido: 'apellido 6', genero: 'M' },
    { id: 7, nombre: 'nombre 7', apellido: 'apellido 7', genero: 'F' },
    { id: 8, nombre: 'nombre 8', apellido: 'apellido 8', genero: 'M' }
]
// instanciar la clase
app.get('/users', (req, res)=>{
    res.send(users)
})

app.get('/users/:uid', (req, res) => {
    const { uid } = req.params

    const user = users.find(u => u.id === parseInt(uid))

    res.send(user)
})


app.listen(8080, error => {
    logger.info('Escuchando el puerto 8080')
})