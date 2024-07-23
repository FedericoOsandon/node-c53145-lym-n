const express = require('express')

// import usersRouter from './routes/users.router.js'
// import productsRouter from './routes/products.router.js'
const  viewsRouter = require('./routes/views.router.js')
// import { __dirname } from './utils.js'
// import { uploader } from './multer.js'
// motor de plantilla
const  handlebars = require('express-handlebars')
const  { productsSocket } = require('./utils/productsSocket.js')
// socket io
const  { Server } = require('socket.io')

const app = express()
// Guardar en una cont
const PORT = process.env.PORT || 8080


const httpServer = app.listen(PORT, error => {
    if(error) logger.info(error)
    logger.info('Server escuchando en el puerto 8080')
})
// creamos el socket server
const io = new Server(httpServer)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname+'/public'))


// express usa este motor de plantillas
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}))
// seteamos la dirección de mis vistas (plantlillas)
app.set('views', __dirname+'/views')
app.set('view engine', 'hbs')

//middleware
// app.use(productsSocket(io))


// app.use('/subir-archivo', uploader.single('myFile') ,(req, res) => {
//     if (!req.file) {
//         return res.send('no se puede subir el archivo')        
//     }

//     res.send('archivo subido')
// })

app.use('/', viewsRouter)

// app.use('/api/users', usersRouter)

// app.use('/api/products', productsRouter)

app.use((error, req, res, next) => {
    logger.info(error)
    res.status(500).send('Error 500 en el server')
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


// 