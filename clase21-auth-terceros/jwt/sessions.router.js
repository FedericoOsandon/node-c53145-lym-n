// session -> login - register - logout
import {Router} from 'express'
import { UsersManagerMongo } from '../dao/usersManagerMongo.js'
import { auth } from '../middlewares/auth.middleware.js'
import { crateHash, isValidPAssword } from '../utils/bcrypt.js'
import passport from 'passport'
import { authTokenMiddlerware, generateToken } from '../utils/jsonwebtoken.js'

export const sessionsRouter = Router()


sessionsRouter.get('/github', passport.authenticate('github', {scope: 'user:email'}), async (req, res)=>{})


sessionsRouter.get('/githubcallback', passport.authenticate('github', {failureRedirect: '/login'}), (req,res) =>{
    req.session.user = req.user
    res.redirect('/products')
})




sessionsRouter.get('/current', authTokenMiddlerware, (req, res) => {
    res.send('datos sensibles')
})


sessionsRouter.get('/logout', (req, res) => {
    req.session.destroy( err => {
        if(err) return res.send({status: 'error', error: err})
        else return res.redirect('/login')
    })
})



