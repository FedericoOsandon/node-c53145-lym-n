import express from 'express'

// cookie - sessions
import cookieParser from 'cookie-parser'
import session from 'express-session'

//session file sotrage -> persistencia en archivo
import FileStore from 'session-file-store'
//session db sotrage -> persistencia en mongo
import MongoStore from 'connect-mongo'

const app = express()
const httpServer = new ServerHttp(app)
const io = new ServerIO(httpServer)

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname+'/public'))
// pasamos los middleware
app.use(cookieParser('s3cr3t@F1rma'))

// sessions
// app.use(session({
//     secret: 's3cr3etC@d3r',
//     resave: true,
//     saveUninitialized: true
// }))

// file store session 
// const fileSotrage = FileStore(session)

// app.use(session({
//     store: new fileSotrage({
//         path: './sessions', 
//         ttl: 100,
//         retries: 0
//     }),
//     secret: 's3cr3etC@d3r',
//     resave: true,
//     saveUninitialized: true
// }))

// sessions con mongo - db
app.use(session({
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/c53145',
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        ttl: 60 * 60 * 1000 * 24
    }),
    secret: 's3cr3etC@d3r',
    resave: true,
    saveUninitialized: true
}))

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


app.use('/subir-archivo', uploader.single('myFile') ,(req, res) => {
    if (!req.file) {
        return res.send('no se puede subir el archivo')        
    }

    res.send('archivo subido')
})

app.use('/', viewsRouter)

app.use('/pruebas', pruebasRouter)
app.use('/api/users', usersRouter)

app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)
app.use('/api/sessions', sessionsRouter)

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


// path - ttl - retires