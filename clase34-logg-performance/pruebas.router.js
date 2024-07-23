import { Router } from 'express'

import { faker } from '@faker-js/faker'

const router = Router()

router.get('/test/user', (req, res)=>{
    let first_name = faker.person.firstName()
    let last_name = faker.person.lastName()
    let email = faker.internet.email()
    let password = faker.internet.password()

    res.send({
        first_name,
        last_name,
        email,
        password

    })
})

router.get('/simple', (req, res) => {
    let sum = 0
    for (let i = 0; i < 1000000; i++) {
        sum += i        
    }
    res.send(`La suma es ${sum}`)
})

router.get('/compleja', (req, res) => {
    let sum = 0
    for (let i = 0; i < 5e8; i++) {
        sum += i        
    }
    res.send(`La suma es ${sum}`)
})

router.get('/loggetest', (req, res) => {
    // req.logger.warning('Alerta!!')
    // req.logger.fatal('Alerta!!')
    req.logger.error('Alerta!!')
    res.send('logs')
})



export default router
