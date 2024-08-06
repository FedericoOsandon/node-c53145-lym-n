const {Router} = require('express')
const { UserDaoMongo } = require('../../daos/MONGO/usersDao.mongo')
const { createHash, isValidPassword } = require('../../utils/bcrypt')
const { generateToken } = require('../../utils/jwt')
const passport = require('passport')
const { passportCall } = require('../../middlewars/passportCall.middleware')
const { authorization } = require('../../middlewars/authorization.middleware')

const router = Router()
const userService = new UserDaoMongo()

router.post('/register', async (req, res) =>{
    const { first_name, last_name, password, email } = req.body
    // validar
    if(!password || !email) return res.status(401).send({status: 'error', message: 'Debe ingresar todas las credenciales'}) 
    // revisar si existe el usuario
    const userFound = await userService.getUser({email})

    if(userFound) return res.status(401).send({status: 'error', message: 'El usuario con ese email ya existe'}) 

        // crean el carrito
    const newUser = {
        first_name,
        last_name,
        email,
        password: createHash(password)
    }
    const result = await userService.createUser(newUser)

    const token = generateToken({
        email,
        id: result._id
    })
    
    res
    .cookie('token', token, {
        maxAge: 60*60*1000*24,
        httpOnly: true
    })
    .send({status: 'success', message: 'usuario registrado'})
})


router.post('/login',    async (req, res) =>{
    const { password, email } = req.body
     // validar
    if(!password || !email) return res.status(401).send({status: 'error', message: 'Debe ingresar todas las credenciales'}) 
     // revisar si existe el usuario
    const userFound = await userService.getUser({email})

    if(!isValidPassword({password: userFound.password}, password)) return res.status(401).send({status: 'error', message: 'No coinciden las credenciales'}) 

    const token = generateToken({
        email,
        id: userFound._id,
        role: userFound.role
    })
        
    res
    .cookie('token', token, {
        maxAge: 60*60*1000*24,
        httpOnly: true
    })
    .send({status: 'success', message: 'usuario logueado'})
})


router.get('/current',  passportCall('jwt'), authorization(['user_premium', 'users']) ,async (req, res) =>{
    res.send('datos sensibles')
})

module.exports = router