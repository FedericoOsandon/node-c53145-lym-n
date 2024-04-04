import { Router } from 'express'

const router = Router()

// configurar con alguna entidad
// router.get('/', (req, res) => {} )
// router.post('/', (req, res) => {} )



// endpionts users curd

// listado de usuarios con persistenvcia en memoria
let users = []
// ejemplo de importar la clase usuario para usar sus metodos
// const { consultarUsuarios } = new ManagerUsuarios()

// trae todos los usuarios
// midd nivel router
router.use((req, res, next)=>{
    console.log(req.nombre)
    next()
})
// creación del midd req ,res next
const middUno = (req, res, next) => {
    req.apellido = 'osandon'
    console.log(req.apellido)
    next()
}
const middDos = (req, res, next) => {
    req.role = 'admin'
    console.log(req.role)
    if (req.role === 'admin') {
        next()        
    }

    res.send('no es admin')
}

// http://localhost:8080 + /api/users + /
//midd nivel endpint
router.get('/', middUno, middDos,async (req, res) => {
    const result = users
    res.send(result)
})

// enpoint para crear un usuario
router.post('/', (req, res) => {
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
//// http://localhost:8080 + /api/users + /uid
router.get('/:uid', (req, res)=>{
    const {uid} = req.params
    const userFound = users.find(user => user.id === parseInt(uid))
    // agregar validación
    res.send({status: 'success', payload: userFound})
    
})
// Endpoint para actualizar un usuario
router.put('/:uid', (req, res) => {
    const { uid } = req.params
    const userToUpdate = req.body

    const userIndex = users.findIndex(user => user.id === parseInt(uid))
    if( userIndex === -1 ) return res.status(404).send({status: 'error', error: 'user not foun'})

    users[userIndex] = { id: parseInt(uid),  ...userToUpdate }

        

    res.send({status: 'success', payload: userToUpdate})

})

// endpoint para eliminar un usuario
router.delete('/:uid', (req, res) => {
    const { uid } = req.params

    const usersResutl = users.filter(user => user.id !== parseInt(uid))

    res.send({status: 'success', payload: usersResutl})
})


export default router


// class -> function contructora function Router()