import { Router } from 'express'
// import { uploader } from '../../clases/node-c53145-lym-n/clase11-chat/chat53145-server-node/src/multer.js'

import usersRouter from './api/users.router.js'
import productsRouter from './api/products.router.js'
import cartsRouter from './api/carts.router.js'
import viewsRouter from './views.router.js'
import pruebasRouter from './api/pruebas.router.js'
// import { sessionsRouter } from './sessions.router.js'
import SessionRouter from './api/session.js'


const router = Router()

// router.use('/subir-archivo', uploader.single('myFile') ,(req, res) => {
//     if (!req.file) {
//         return res.send('no se puede subir el archivo')        
//     }

//     res.send('archivo subido')
// })
const sessionRouterClass = new SessionRouter()
router.use('/', viewsRouter)
router.use('/pruebas', pruebasRouter)

router.use('/api/users', usersRouter)

router.use('/api/products', productsRouter)
router.use('/api/carts', cartsRouter)
// el nuevo session router con la clase router avanzada
router.use('/api/sessions', sessionRouterClass.getRouter()) 

router.use((error, req, res, next) => {
    logger.info(error)
    res.status(500).send('Error 500 en el server')
})

export default router