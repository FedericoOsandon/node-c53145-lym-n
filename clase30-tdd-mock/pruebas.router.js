import { Router } from 'express'
import {fork} from 'child_process'
import { sendEmail } from '../../utils/sendMail.js'
import { sendSms } from '../../utils/sendSms.js'
import { generateUser } from '../../utils/generateUsersMock.js'

const router = Router()

router.get('/users', (req, res) => {
    let users = []

    for (let i = 0; i < 10; i++) {
          users.push(generateUser())      
    }

    res.send({
        status: 'success',
        payload: users
    })
})



export default router
