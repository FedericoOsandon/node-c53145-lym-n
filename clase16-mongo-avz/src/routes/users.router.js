import { Router } from 'express'
import { userModel } from '../models/users.models.js'

// userModel -> userManagerMongo
const router = Router()
// const usersManager = new UsersManagerMongo()

// edpoint para traer los usuarios /api/users
router.get('/', async (req, res) => {
    // const users = await usersManager.getUsers()
    const users = await userModel.find({first_name: 'Celia'}).explain('executionStats') //-> []
    console.log(users)
    res.send(users)
})

// enpoint para crear un usuario
// router.post('/', async (req, res) => {
    
//     const { first_name, last_name, email} = req.body
//     // console.log(first_name, last_name, email, password)
//     if(!email) return res.send({status: 'error', error: 'faltan campos'})
//     // persistencia en memoria
//     // const newUser = {
//     //     id: users.length +1,
//     //     first_name,
//     //     last_name,
//     //     email, 
//     //     password
//     // }

//     // users.push(newUser)

//     // persistencia en mongo -> atlas
//     const newUser = {
//         first_name,
//         last_name,
//         email
//     }

//     const result = await userModel.create(newUser)
//     // validar el result
//     res.status(200).send({ status: 'success', payload: result })
// })

// endpoint para traer un usuario por id
//// http://localhost:8080 + /api/users + /uid
// router.get('/:uid', (req, res)=>{
//     const {uid} = req.params
//     const userFound = users.find(user => user.id === parseInt(uid))
//     // agregar validación
//     res.send({status: 'success', payload: userFound})
    
// })


// Endpoint para actualizar un usuario
// router.put('/:uid', async (req, res) => {
//     const { uid } = req.params
//     const { first_name, last_name, email} = req.body
    
//     if(!first_name,!last_name, !email) return res.send({status: 'error', error: 'faltan campos'})
//     // const userIndex = users.findIndex(user => user.id === parseInt(uid))
//     // if( userIndex === -1 ) return res.status(404).send({status: 'error', error: 'user not foun'})

//     // users[userIndex] = { id: parseInt(uid),  ...userToUpdate }
  
//     const result = await userModel.updateOne({_id: uid}, {first_name, last_name, email})
//     // const result = await userModel.findByIdAndUpdate({_id: uid}, userToUpdate)

//     res.send({status: 'success', payload: result})

// })

// endpoint para eliminar un usuario
// router.delete('/:uid', async (req, res) => {
//     const { uid } = req.params

//     // const usersResutl = users.filter(user => user.id !== parseInt(uid))
//     const result = await userModel.deleteOne({_id: uid})
//     res.send({status: 'success', payload: result})
// })


export default router


// class -> function contructora function Router()

// traer un carrito por id  //        /api/carts/:cid/products/:pid
// getById({_id:cid})
// {_id: 'akljsflasjdflasñ', prodcuts: [{productId: '', quantity: 2}]}