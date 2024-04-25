import express from 'express'

import usersRouter from './routes/users.router.js'
import productsRouter from './routes/products.router.js'
import viewsRouter from './routes/views.router.js'
import { __dirname } from './utils.js'
import { uploader } from './multer.js'
// motor de plantilla
import handlebars from 'express-handlebars'
import { productsSocket } from './utils/productsSocket.js'
// socket io
import { Server as ServerIO } from 'socket.io'
import { Server as ServerHttp } from 'http'
// importación de mongoose
import mongoose from 'mongoose'

const app = express()
const httpServer = new ServerHttp(app)
const io = new ServerIO(httpServer)

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname+'/public'))

// después vamos a llevar a otro archivo
// Conectar con mongo -> localhost === 127.0.0.1
// mongoose.connect('mongodb://127.0.0.1:27017/c53145')
mongoose.connect('link atlas')


// express usa este motor de plantillas
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}))
// seteamos la dirección de mis vistas (plantlillas)
app.set('views', __dirname+'/views')
app.set('view engine', 'hbs')

//middleware
app.use(productsSocket(io))


app.use('/subir-archivo', uploader.single('myFile') ,(req, res) => {
    if (!req.file) {
        return res.send('no se puede subir el archivo')        
    }

    res.send('archivo subido')
})

app.use('/', viewsRouter)

app.use('/api/users', usersRouter)

app.use('/api/products', productsRouter)

app.use((error, req, res, next) => {
    console.log(error)
    res.status(500).send('Error 500 en el server')
})

// Guardar en una cont
httpServer.listen(PORT, error => {
    if(error) console.log(error)
    console.log('Server escuchando en el puerto 8080')
})



let messages = [] // simular un db mock 
// manager chat - productos 
// socketServer -> io 
io.on('connection', socket => {
    console.log('Cliente conectado')

    socket.on('message', data => {
        console.log('message data: ', data)
        // guardamos los mensajes
        messages.push(data)
        // emitimos los mensajes
        io.emit('messageLogs', messages)
    })
})


// mongodb+srv://Federico:<password>@coderexample.hjzrdtr.mongodb.net/?retryWrites=true&w=majority