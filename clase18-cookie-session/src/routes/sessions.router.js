// session -> login - register - logout
import {Router} from 'express'

export const sessionsRouter = Router()

sessionsRouter.post('/login', (req, res) => {
    const {email, password} = req.body

    if(email !== 'fede@gmail.com' || password !== 'fedeElMejor') return res.send('login failed')

    req.session.user = {
        email,
        admin: true
    }

    logger.info(req.session.user)
    res.send('login success')
})


sessionsRouter.get('/logout', (req, res) => {
    req.session.destroy( err => {
        if(err) return res.send({status: 'error', error: err})
        else return res.send('logout')
    })
})



