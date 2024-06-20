const express = require('express')
const cookieParser = require('cookie-parser')
const {engine} = require('express-handlebars')

const cors = require('cors')
// socket io _______________________________________________________________
const {config: configObject} = require('./config/config.js')

const { Server: HttpServer } = require('http')
const { Server: ServerIo } = require('socket.io')
const { initChatSocket, initProductsSocket } = require('./utils/socket.js')
const { router } = require('./routes')
// _____________________________________________________________________
const { initializePassport } = require('./config/passport.config.js')
const passport = require('passport')
const { addLogger, logger } = require('./middleware/logger.js')
const {dirname} = require('node:path')

const app = express()
const httpServer = new HttpServer(app)
const io = new ServerIo(httpServer)
const PORT = configObject.PORT 

// handlebars_______________________________________________________________
// const handlebars = require('express-handlebars')
app.engine('hbs', engine({
    extname:'.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', __dirname+'/views')
    
// _________________________________________________________

// app.use(logger('dev'))
app.use(cors())
app.use('/virtual' ,express.static(__dirname+'/public')) 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
// session mongo_______________________________________________________________
// app.use(session(configObject.session))

// passport _______________________
initializePassport()
app.use(passport.initialize()) 
// app.use(passport.session())
// passport _______________________
app.use(addLogger)

app.use(router)
    
    
// socket_______________________________________________________________
initChatSocket(io)
initProductsSocket(io)
    
const initServer = async () => {
    return await httpServer.listen(PORT,err =>{
        if (err)  console.log(err)
        logger.info(`Escuchando en el puerto ${PORT}`)
    })
}

module.exports = {
    initServer
}



