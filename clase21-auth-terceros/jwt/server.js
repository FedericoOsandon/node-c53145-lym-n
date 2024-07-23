import express from 'express'

import usersRouter from './routes/users.router.js'
import productsRouter from './routes/products.router.js'
import cartsRouter from './routes/carts.router.js'
import viewsRouter from './routes/views.router.js'
import { sessionsRouter } from './routes/sessions.router.js'

import { __dirname } from './utils.js'
import { uploader } from './multer.js'
// motor de plantilla
import handlebars from 'express-handlebars'
import { productsSocket } from './utils/productsSocket.js'
// socket io
import { Server as ServerIO } from 'socket.io'
import { Server as ServerHttp } from 'http'

import { connectDb } from './config/index.js'
import session from 'express-session'
import MongoStore from 'connect-mongo'

// passport 
import passport from 'passport'
import { initializePassport } from './config/passport.config.js'


const app = express()
const httpServer = new ServerHttp(app)
const io = new ServerIO(httpServer)

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname+'/public'))

connectDb()

// express usa este motor de plantillas
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}))
// seteamos la dirección de mis vistas (plantlillas)
app.set('views', __dirname+'/views')
app.set('view engine', 'hbs')

//middleware
app.use(productsSocket(io))

// session mongo_______________________________________________________________
// app.use(session({
//     store: MongoStore.create({
//         mongoUrl: 'mongodb://localhost:27017/c53145',
//         mongoOptions: {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         },
//         ttl: 15000000000
//     }), 
//     secret: 's3cr3t0',
//     resave: false,
//     saveUninitialized: false,
// }))
// initializePassport() // passport.use(register) 
// app.use(passport.initialize())
// app.use(passport.session())

app.use('/subir-archivo', uploader.single('myFile') ,(req, res) => {
    if (!req.file) {
        return res.send('no se puede subir el archivo')        
    }

    res.send('archivo subido')
})

app.use('/', viewsRouter)

app.use('/api/users', usersRouter)

app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)
// localhost:8080/api/sessions /githubcallback
app.use('/api/sessions', sessionsRouter) //

app.use((error, req, res, next) => {
    logger.info(error)
    res.status(500).send('Error 500 en el server')
})

// Guardar en una cont
httpServer.listen(PORT, error => {
    if(error) logger.info(error)
    logger.info('Server escuchando en el puerto 8080')
})



let messages = [] // simular un db mock 
// manager chat - productos 
// socketServer -> io 
io.on('connection', socket => {
    logger.info('Cliente conectado')

    socket.on('message', data => {
        logger.info('message data: ', data)
        // guardamos los mensajes
        messages.push(data)
        // emitimos los mensajes
        io.emit('messageLogs', messages)
    })
})


