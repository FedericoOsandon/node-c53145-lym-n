import { Router } from 'express'
import {fork} from 'child_process'
import { sendEmail } from '../../utils/sendMail.js'
import { sendSms } from '../../utils/sendSms.js'

const router = Router()


router.get('/sms', async (req, res)=>{
    try {
        const user = {
            first_name: 'Fede',
            last_name: 'Osandón',
            email: 'projectodigitalgen@gmail.com',
        }
        sendSms()
        res.send('Sms enviado')
    } catch (error) {
        console.log(error)
    }
})

router.get('/mail', async (req, res)=>{
    try {
        const user = {
            first_name: 'Fede',
            last_name: 'Osandón',
            email: 'projectodigitalgen@gmail.com',
        }
        sendEmail({
            email: user.email,
            subject: 'Email de prueba',
            html: `<h1>Bienvenido ${user.first_name} ${user.last_name}</h1>`
        })
        res.send('Email enviado a su cassilla')
    } catch (error) {
        console.log(error)
    }
})



export default router
// á -> %C#%A1
// é -> %C3%A9
// í -> %C#%AD