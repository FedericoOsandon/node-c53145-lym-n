const { Router } = require('express')
const compression = require('express-compression')
const {faker} = require('@faker-js/faker')

const parametrosRouter  = require('./parametros.router.js')
const mailingRouter  = require('./mailing.router.js')
const forkRouter  = require('./fork.router.js')
const fakerRouter  = require('./faker.router.js')
const { uploader } = require('../utils/multerConfig.js')
const { loginUser, registerUser } = require('../controllers/sessions.controller.js')

const router = Router()


router.use('/fork', forkRouter)

// http://localhost:8080/api/param
router.use('/parametros', parametrosRouter)

router.use('/mailing', mailingRouter)

router.use('/faker', fakerRouter)
// router.use(compression())
router.use(compression({
    brotli: {
        enabled: true,
        zlib: {}
    }
}))
router.get('/stingmuylargo', (req, res)=>{
    let string = 'Hola Coders, soy un string ridiculamente largo'
    for( let i = 0; i < 5e4; i++){
        string += 'Hola Coders, soy un string ridiculamente largo'
    }
    res.status(200).send(string)
})


router.post('/single', uploader.single('myfile') ,(req, res)=>{
    res.status(200).json({
        mensaje: 'se a subido con éxito el archivo'
    })
})

// artillery quick --count 40 --num 50 "http://localhost:8080/sencilla" -o simple.json
// artillery quick --count 40 --num 50 "http://localhost:8080/compleja" -o compleja.json

router.post('/login', loginUser)
router.post('/register',registerUser)


router.get('/test/user', (req, res)=>{
    let first_name = faker.name.firstName()
    let last_name = faker.name.lastName()
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
    res.send({status:'success', message: `El worker ${process.pid} a atendido la petición: La suma es = ${sum}`})
})
router.get('/compleja', (req, res) => {
    let sum = 0
    for (let i = 0; i < 5e8; i++) {
        sum += i        
    }
    res.send({status:'success', message: `El worker ${process.pid} a atendido la petición: La suma esLa suma es ${sum}`})
})

router.get('/warning', async (req, res) => {
    
    // Ejemplo de logger 1
    // req.logger.warn('Alerta de prueba')

    // Ejemplo de logger 2
    req.logger.error('Alerta de prueba')
    // req.logger.fatal('Alerta de prueba')
    // req.logger.warning('Alerta de prueba')
    
    res.send('Prueba de logger')
})

module.exports = router

// artillery run config.yml --output testperformance.json
// artillery report testperformance.json -o testresult.html