import UserDto from "../dtos/users.dto.js"
import { userService } from "../service/index.js"

class UserController {
    constructor(){
        this.userService = userService
    }

    getUsers = async (req, res) => {
        try {
            const users = await this.userService.getUsers()                 
            res.send(users)            
        } catch (error) {
            logger.info(error)
        }
    }

    getUser = async (req, res) => {
        const {uid} = req.params
        const userFound = users.find(user => user.id === parseInt(uid))
        // agregar validación
        res.send({status: 'success', payload: userFound})
        
    }

    createUser = async (req, res) => {
    
        const { first_name, last_name, email, password } = req.body
        // logger.info(first_name, last_name, email, password)
        if(!email) return res.send({status: 'error', error: 'faltan campos'})
        // persistencia en memoria
        // const newUser = {
        //     id: users.length +1,
        //     first_name,
        //     last_name,
        //     email, 
        //     password
        // }
    
        // users.push(newUser)
    
        // persistencia en mongo -> atlas
        const newUser = {
            first_name,
            last_name,
            email,
            password
        }
        
    
        const result = await userService.createUser(newUser)
        // validar el result
        res.status(200).send({ status: 'success', payload: result })
    }

    updateUser = async (req, res) => {
        const { uid } = req.params
        const { first_name, last_name, email} = req.body
        
        if(!first_name,!last_name, !email) return res.send({status: 'error', error: 'faltan campos'})
        // const userIndex = users.findIndex(user => user.id === parseInt(uid))
        // if( userIndex === -1 ) return res.status(404).send({status: 'error', error: 'user not foun'})
    
        // users[userIndex] = { id: parseInt(uid),  ...userToUpdate }
      
        const result = await this.userService.updateUser(uid, req.body)
        // const result = await userModel.findByIdAndUpdate({_id: uid}, userToUpdate)
    
        res.send({status: 'success', payload: result})
    
    }

    deleteUser = async (req, res) => {
        const { uid } = req.params
    
        // const usersResutl = users.filter(user => user.id !== parseInt(uid))
        const result = await userModel.deleteOne({_id: uid})
        res.send({status: 'success', payload: result})
    }

}

export default UserController