const { userService } = require("../services")
const { sendEmail } = require("../utils/sendEmail")

class UserController {
    constructor(){
        this.service = userService
    }
    getUsers =  async (req, res) => {
        const users = await this.service.getItems()
        res.send({status: 'success', users})
    }

    getUser = async (req, res) => {
        const { uid } = req.params
        const userFound = await this.service.getItem({_id: uid})
        res.send({status: 'success', payload: userFound})
    }

    createUser = async (req, res) => {
        const { body } = req
        const result = await this.service.createItems(body)
        const html = `<h1>Bienvenido ${result.first_name} ${result.last_name}</h1>`
        sendEmail({userMail: result.email, subject: `Se a creado correctamente el usuario ${result.email}`, html})
        res.send({status: 'success', data: result})
    }

    updateUser =  async (req, res) => {
        res.send('update User')
    }

    deleteUser = async (req, res) => {
        res.send('delete User')
    }
}



module.exports = {
    UserController
}