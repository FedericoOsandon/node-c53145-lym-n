const fs     = require('node:fs')
const crypto = require('node:crypto')

const path = './file/Usuarios.json'

class UserManager {    
    constructor(path){
        this.path = path
    }

    leerArchivo = async () => {
        try {
            const dataJson = await fs.promises.readFile(this.path, 'utf-8')
            return JSON.parse(dataJson)            
        } catch (error) {
            return []
        }
    } 

    crearUsuario = async usuario => {
        try {
            const users = await this.leerArchivo()
            if(users.length === 0) {
                usuario.id = 1
            } else {
                usuario.id = users.length + 1
            }
            const salt  = crypto.randomBytes(128).toString('base64')
            const password =  crypto.createHmac('sha256', salt).update(usuario.password).digest('hex')
            usuario.contrasenia = password
            usuario.salt = salt
            users.push(usuario)
            await fs.promises.writeFile(this.path, JSON.stringify(users, null, '\t'), 'utf-8')
            return users     
            
        } catch (error) {
            console.log(error)
        }
    }
    validarUsuario = async (username, password) => {
        try {
            const users = await this.leerArchivo()
            const userIdx = users.findIndex(user => username === user.username)

            if( userIdx === -1 ) {
                return 'users no encontrado'
            }
            const user = users[userIdx]

            const newHas = crypto.createHmac('sha256', user.salt).update(password).digest('hex')

            if(newHas !== user.contrasenia){
                return 'no coincide'
            }

            return 'correcto'
            

        } catch (error) {
            console.log(error)
        }
    }


}
const crearUser = async () => {
    const usuarios = new UserManager(path)
    
    console.log(await usuarios.crearUsuario({
        username: 'fedeosandon', 
        first_name: 'fede', 
        last_name: 'Osandón', 
        password: '123456'
    }))

}
// crearUser()
// function UserManager(){}

const usuarios2 = new UserManager(path)

usuarios2.validarUsuario('fedeosandon3', '123456')
.then(users => console.log(users))