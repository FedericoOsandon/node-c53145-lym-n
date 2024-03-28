import express from 'express'
import ManagerUsuarios from '../../after/managerUsuarios.js'
// const express = reuqire('express')

const app = express()
// para poder leer los json
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// http://localhost:8080  /
app.get('/', (req, res)=>{
    res.status(200).send('<h1>Hola coders</h1>')
})


// endpionts users curd

// listado de usuarios con persistenvcia en memoria
let users = []
// ejemplo de importar la clase usuario para usar sus metodos
const { consultarUsuarios } = new ManagerUsuarios()

// trae todos los usuarios
app.get('/api/users', async (req, res) => {
    const result = await consultarUsuarios()
    res.send(result)
})

// enpoint para crear un usuario
app.post('/api/users', (req, res) => {
    console.log(req.body)
    const { first_name, last_name, email, password} = req.body
    // console.log(first_name, last_name, email, password)
    if(!email || !password) return res.send({status: 'error', error: 'faltan campos'})

    const newUser = {
        id: users.length +1,
        first_name,
        last_name,
        email, 
        password
    }

    users.push(newUser)


    res.status(200).send({ status: 'success', payload: newUser })
})

// endpoint para traer un usuario por id
app.get('/api/users/:uid', (req, res)=>{
    const {uid} = req.params
    const userFound = users.find(user => user.id === parseInt(uid))
    // agregar validación
    res.send({status: 'success', payload: userFound})
    
})
// Endpoint para actualizar un usuario
app.put('/api/users/:uid', (req, res) => {
    const { uid } = req.params
    const userToUpdate = req.body

    const userIndex = users.findIndex(user => user.id === parseInt(uid))
    if( userIndex === -1 ) return res.status(404).send({status: 'error', error: 'user not foun'})

    users[userIndex] = { id: parseInt(uid),  ...userToUpdate }

        

    res.send({status: 'success', payload: userToUpdate})

})

// endpoint para eliminar un usuario
app.delete('/api/users/:uid', (req, res) => {
    const { uid } = req.params

    const usersResutl = users.filter(user => user.id !== parseInt(uid))

    res.send({status: 'success', payload: usersResutl})
})


// endpiion de crud de products, realizar para el desafio

// app.get('/api/products', (req, res) => {})
// app.post('/api/products', (req, res) => {})
// app.put('/api/products/:pid', (req, res) => {})
// app.delete('/api/products/:pid', (req, res) => {})

app.listen(8080, error => {
    if(error) console.log(error)
    console.log('Server escuchando en el puerto 8080')
})