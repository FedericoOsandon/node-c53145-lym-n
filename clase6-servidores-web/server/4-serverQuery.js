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

// app.get('/users', (req, res)=>{
//     res.send(users)
// })

app.get('/users', (req, res) => {
    // console.log( req.query)

    const { genero, nombre } = req.query

    if(!genero || (genero!=='M' && genero!=='F')) return res.send(users)

    const usersFound = users.filter(u => u.genero === genero)

    res.send(usersFound)
})


app.listen(8080, error => {
    console.log('Escuchando el puerto 8080')
})