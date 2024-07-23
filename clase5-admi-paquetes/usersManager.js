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
    // {username, password, email, nombre, apellido}
    registerUsuario = async usuario => {
        try {
            //leer archivo
            const users = await this.leerArchivo()

            // validar de que no exista
            const userFound = users.find(u => u.username === usuario.username)
            if(!userFound) return 'ya existe este usuario'

            // agregar id
            if(users.length === 0) {
                usuario.id = 1
            } else {
                usuario.id = users.length + 1
            }

            // encriptar contraseña
            const salt  = crypto.randomBytes(128).toString('base64')
            const password =  crypto.createHmac('sha256', salt).update(usuario.password).digest('hex')
            usuario.contrasenia = password
            usuario.salt = salt
            // agregar usuario al array
            users.push(usuario)
            // escribir en el archivo
            await fs.promises.writeFile(this.path, JSON.stringify(users, null, '\t'), 'utf-8')
            return users     
            
        } catch (error) {
            logger.info(error)
        }
    }
    
    loginUsuario = async (username, password) => {
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
            logger.info(error)
        }
    }
}

/////////////////////////////////////////////////////////

const crearUser = async () => {
    const usuarios = new UserManager(path)
    
    logger.info(await usuarios.crearUsuario({
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
.then(users => logger.info(users))