// session -> login - register - logout
import {Router} from 'express'
import { UsersManagerMongo } from '../dao/usersManagerMongo.js'
import { auth } from '../middlewares/auth.middleware.js'
import { crateHash, isValidPAssword } from '../utils/bcrypt.js'
import passport from 'passport'

export const sessionsRouter = Router()

sessionsRouter.post('/register', passport.authenticate('register', {failureRedirect: '/failregister'}), async (req, res) => {
    res.send({status: 'success', message: 'User Registrado'})
})
sessionsRouter.post('/failregister', async (req, res) => {
    console.log('falló la estrategia')
    res.send({error: 'failed'})
})

sessionsRouter.post('/login', passport.authenticate('login', {failureRedirect: '/faillogin'}),async (req, res) => {
    if(!req.user) return res.status(400).send({status: 'error', error: 'credenciales invalidas'})
    req.session.user = {
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        
        email: req.user.email
    }
    res.send({status: 'succes', payload: req.user})
})

sessionsRouter.post('/faillogin', (req, res) => {
    res.send({error: 'falló el login'})
})

sessionsRouter.get('/current', auth, (req, res) => {
    res.send('datos sensibles')
})


sessionsRouter.get('/logout', (req, res) => {
    req.session.destroy( err => {
        if(err) return res.send({status: 'error', error: err})
        else return res.redirect('/login')
    })
})



