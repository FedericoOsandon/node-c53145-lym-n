import express from 'express'
import viewsRouter from './routes/views.router.js'
import { __dirname } from './utils.js'

// motor de plantilla
import handlebars from 'express-handlebars'
import { Server } from 'socket.io'

const app = express()
// Guardar en una cont
const httpServer = app.listen(8080, error => {
    if(error) console.log(error)
    console.log('Server escuchando en el puerto 8080')
})
// creamos el socket server
const socketServer = new Server(httpServer)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname+'/public'))


// express usa este motor de plantillas
app.engine('handlebars', handlebars.engine())
// seteamos la dirección de mis vistas (plantlillas)
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')


app.use('/', viewsRouter)


socketServer.on('connection', socket => {
    console.log('nuevo cliete conectado')

    // socket.on('message', data => {
    //     console.log(data)
    // })

    // socket.emit('socket_individual', 'Este mensaje lo debe ecibir este los socket')

    // socket.broadcast.emit('para_todos_menos_el_actual', 'este evento lo verán todos los socket conectados menos el actual.')

    // socketServer.emit('eventos_para_todo', 'Este mensjae lo reciben todos los socket incluido el actual')

    const messages = []

    // enviar mensajes viejos

    socket.on('mensaje_cliente', data => {
        console.log(data)

        messages.push({id: socket.id, messge: data})
        
        socketServer.emit('messages_server', messages)
    })
})