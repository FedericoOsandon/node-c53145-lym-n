import express from 'express'
import usersRouter from './routes/users.router.js'
import productsRouter from './routes/products.router.js'
import viewsRouter from './routes/views.router.js'
import { __dirname } from './utils.js'
import { uploader } from './multer.js'
// motor de plantilla
import handlebars from 'express-handlebars'


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname+'/public'))


// express usa este motor de plantillas
app.engine('handlebars', handlebars.engine())
// seteamos la dirección de mis vistas (plantlillas)
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')

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
    logger.info(error)
    res.status(500).send('Error 500 en el server')
})

app.listen(8080, error => {
    if(error) logger.info(error)
    logger.info('Server escuchando en el puerto 8080')
})

