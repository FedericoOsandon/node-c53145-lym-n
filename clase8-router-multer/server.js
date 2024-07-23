import express from 'express'
import usersRouter from './routes/users.router.js'
import productsRouter from './routes/products.router.js'
import { __dirname } from './utils.js'
import { uploader } from './multer.js'
const app = express()

// logger.info(import.meta.url)

// para poder leer los json
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// app.use(express.static('public'))

// app.use('/static', express.static(__dirname+'/public'))
app.use(express.static(__dirname+'/public'))

// app.use((req, res, next)=> {
//     req.nombre = 'fede'
//     logger.info('Tiempo: ', Date())
//     logger.info('saludando desde el middleware')
//     next()
// })

app.use('/subir-archivo', uploader.single('myFile') ,(req, res) => {
    if (!req.file) {
        return res.send('no se puede subir el archivo')        
    }

    res.send('archivo subido')
})

// http://localhost:8080 + /api/users
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