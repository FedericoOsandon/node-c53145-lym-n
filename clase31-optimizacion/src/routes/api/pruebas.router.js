import { Router } from 'express'
import {fork} from 'child_process'
// import { sendEmail } from '../../utils/sendMail.js'
// import { sendSms } from '../../utils/sendSms.js'
import { generateUser } from '../../utils/generateUsersMock.js'
import compression from 'express-compression'

const router = Router()

router.use(compression({
    brotli: {
        enabled: true,
        zlib: {}
    }
}))

router.get('/stringmuylargo', (req, res) => {
    let string = `Hola coders, soy un string ridiculamente largo`
    for (let i = 0; i < 5e4; i++) {
        string += `Hola coders, soy un ridiculamente muy largo`        
    }
    res.status(200).send(string)
})

// router.get('/users', (req, res) => {
//     let users = []

//     for (let i = 0; i < 10; i++) {
//           users.push(generateUser())      
//     }

//     res.send({
//         status: 'success',
//         payload: users
//     })
// })


// router.get('/sms', async (req, res)=>{
//     try {
//         const user = {
//             first_name: 'Fede',
//             last_name: 'Osandón',
//             email: 'projectodigitalgen@gmail.com',
//         }
//         sendSms()
//         res.send('Sms enviado')
//     } catch (error) {
//         logger.info(error)
//     }
// })

// router.get('/mail', async (req, res)=>{
//     try {
//         const user = {
//             first_name: 'Fede',
//             last_name: 'Osandón',
//             email: 'projectodigitalgen@gmail.com',
//         }
//         sendEmail({
//             email: user.email,
//             subject: 'Email de prueba',
//             html: `<h1>Bienvenido ${user.first_name} ${user.last_name}</h1>`
//         })
//         res.send('Email enviado a su cassilla')
//     } catch (error) {
//         logger.info(error)
//     }
// })







// utf-8

// function operacionCompleja() {
//     let result = 0

//     for (let i = 0; i < 10e9; i++) {
//         result += 1        
//     }
//     return result
// }

// router.get('/simple', (req, res) => {
//     const result = operacionCompleja()
//     res.send({result})
// })


// router.get('/compleja', (req, res) => {
//     const child = fork('./src/routes/operacionCompleja.js')
//     child.send('inicia el calculo')
//     child.on('message', result => {
//         res.send({result})

//     })
// })


// router.param('word', async(req,res,next,word) => {
//     // consulta await traer de la bas de daots esta palaba
//     req.word = word
//     next()
// })

// // router.get('/params/:word([a-zA-Z%C3%A1%C3%A9]+)', (req, res) => {
// router.get('/params/:word([0-9]+)', (req, res) => {
//     const {word} = req.params
//     logger.info(req.word)
//     res.send(word)
// })

// router.get('*', (req,res) => {
//     res.send('not found')
// })



export default router
// á -> %C#%A1
// é -> %C3%A9
// í -> %C#%AD