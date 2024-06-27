import express from 'express'
import { __dirname } from './utils.js'
import handlebars from 'express-handlebars'
import { productsSocket } from './utils/productsSocket.js'
import { Server as ServerIO } from 'socket.io'
import { Server as ServerHttp } from 'http'
import passport from 'passport'
import cookieParser from 'cookie-parser'
import { initializePassport } from './config/passport.config.js'
import { connectDb, objectConfig } from './config/index.js'
import routerApp from './routes/index.js'
import { sendMessage } from './utils/sendMessage.js'
import cors from 'cors'
// passport 

const app = express()
const httpServer = new ServerHttp(app)
const io = new ServerIO(httpServer)
const { port } = objectConfig

// const appUse = midd => {
//     return app.use(midd)
// }
// appUse(express.json())


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname+'/public'))
app.use(cookieParser())
app.use(cors())

app.use(productsSocket(io))

initializePassport()  
app.use(passport.initialize())

// express usa este motor de plantillas
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}))
app.set('views', __dirname+'/views')
app.set('view engine', 'hbs')

app.use(routerApp)

// Guardar en una cont
httpServer.listen(port, error => {
    if(error) console.log(error)
    console.log('Server escuchando en el puerto ' + port)
})

sendMessage(io)
