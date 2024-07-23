// session -> login - register - logout
import {Router} from 'express'
import { UsersManagerMongo } from '../dao/usersManagerMongo.js'
import { auth } from '../middlewares/auth.middleware.js'
import { crateHash, isValidPAssword } from '../utils/bcrypt.js'
import passport from 'passport'
import { authTokenMiddlerware, generateToken } from '../utils/jsonwebtoken.js'
import { passportCall } from '../utils/passportCall.js'
import { atuhorization } from '../utils/authorizationJwt.js'

export const sessionsRouter = Router()

const userService = new UsersManagerMongo()


sessionsRouter.get('/github', passport.authenticate('github', {scope: 'user:email'}), async (req, res)=>{})


sessionsRouter.get('/githubcallback', passport.authenticate('github', {failureRedirect: '/login'}), (req,res) =>{
    req.session.user = req.user
    res.redirect('/products')
})






sessionsRouter.post('/register', async (req, res) => {
    try {
        const {first_name, last_name, email, password } = req.body
        
        // validar si vienen los datos
        if(!email || !password) return res.status(401).send({status: 'error', error: 'se debe completar todos los datos'})
    
        //validar si existe el usuario
        const userExist = await userService.getUserBy({email})
        if(userExist) return res.status(401).send({status: 'error', error: 'el usuario ya existe'})
    
        const newUser = {
            first_name,
            last_name, 
            email, 
            password: crateHash(password) // lo vamos a encriptar
        }
    
        const result = await userService.createUser(newUser)
        // datos de dentro del token
        const token = generateToken({
            id: result._id,
            email
        })
    
        res.send({status: 'success', token})
        
    } catch (error) {
        logger.info(error)
    }
})



sessionsRouter.post('/login', async (req, res) => {
    const {email, password} = req.body

    // validar si vienen los datos
    if(!email || !password) return res.status(401).send({status: 'error', error: 'se debe completar todos los datos'})

    const userFound = await userService.getUserBy({email})

    if(!userFound) return res.status(400).send({status: 'error', error: 'usuario no encontrado'})

    // const isValid = isValidPAssword(password, { password: userFound.password }) // return bool true/false

    if(!isValidPAssword(password, { password: userFound.password })) return res.status(401).send({status: 'error', error: 'Pasword incorrecto'})

    // req.session.user = {
    //     email,
    //     admin: userFound.role === 'admin'
    // }

    // logger.info(req.session.user)
    const token = generateToken({
        id: userFound._id,
        email,
        role: userFound.role 
    })


    res.cookie('token', token, {
            maxAge: 60*60*1000*24,
            httpOnly: true
        }).send({status: 'success'})
})


// sessionsRouter.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
sessionsRouter.get('/current', passportCall('jwt'), atuhorization('admin'), (req, res) => {
    logger.info(req.user)
    res.send('datos sensibles')
})


sessionsRouter.get('/logout', (req, res) => {
    req.session.destroy( err => {
        if(err) return res.send({status: 'error', error: err})
        else return res.redirect('/login')
    })
})



