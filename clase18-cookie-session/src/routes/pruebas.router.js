import {Router} from 'express'
import { auth } from '../middlewares/auth.middleware.js'

const router = Router()

// session
// este endoint lo puede ver solo un administrados
router.get('/current', auth ,(req, res) => {
    res.send('datos sensibles que solo puede ver el admin')
})

router.get('/session', (req, res) => {
    if(req.session.counter){
        req.session.counter++
        res.send(`Se ha visitado el sitio ${req.session.counter} veces.`)
    }else{
        req.session.counter = 1
        res.send('Bienvenidos')
    }

})

router.get('/logout', (req, res) => {
    req.session.destroy( err => {
        if(err) return res.send({status: 'error', error: err})
        else return res.send('logout')
    })
})

// cookie

// creare endpoint para probar los metodos de las cookie
router.get('/setCookie', (req, res) => {
    // res vamos a mandar una orden al navegador / 10000 ms -> 10 seg
    res.cookie('CoderCookie', 'Esta es una cookie muy poderosa', {maxAge: 10000000}).send('cookie')
})
router.get('/setCookieSigned', (req, res) => {
    // res vamos a mandar una orden al navegador / 10000 ms -> 10 seg
    res.cookie('CoderCookie', 'Esta es una cookie muy poderosa', {maxAge: 10000000, signed: true}).send('cookie signed')
})

router.get('/getCookie', (req, res) => {
    // 
    // res.send(req.cookies)
    res.send(req.signedCookies) // ->  para las cookie firmadas
})
router.get('/deleteCookie', (req, res) => {
    // 
    res.clearCookie('CoderCookie').send('cookie borrada')
})

export default router