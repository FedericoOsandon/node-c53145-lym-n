import { Router } from 'express'
import UsersDaoMongo from '../daos/MONGO/usersDao.mongo.js'
import { auth } from '../middlewares/auth.middleware.js'

const router = Router()



const products = [
    {id: '1', title: 'producto 1', precio: '100'},
    {id: '2', title: 'producto 2', precio: '101'},
    {id: '3', title: 'producto 3', precio: '102'},
    {id: '4', title: 'producto 4', precio: '103'},
    {id: '5', title: 'producto 5', precio: '104'}    
]

const user = {
    username: 'federicoosandon',
    nombre: 'fede',
    apellido: 'osandon',
    role: 'user'
}
// const productMangagerMongo = new ProductManagerMongo()

router.get('/login', (req,res) => {
    res.render('login')
})
router.get('/register', (req,res) => {
    res.render('register')
})

router.get('/users', auth,async (req, res) => {
    const {numPage, limit} = req.query
   
    const userService = new UsersDaoMongo()
    const  { docs, page, hasPrevPage, hasNextPage, prevPage, nextPage } = await userService.getUsers({limit, numPage })
    // console.log(resp)

    res.render('users', {
        users: docs,
        page, 
        hasNextPage,
        hasPrevPage,
        nextPage,
        prevPage
    })
})


router.get('/', async (req, res) => {
    // const product = await productMangagerMongo.getPRoducts()
    res.render('index',{ products })
})
 
// endpoint en ruta raíz
// router.get('/', (req, res)=>{
//     res.render('home', { 
//         username: user.username,
//         nombre: user.nombre,
//         apellido: user.apellido,
//         role: user.role === 'admin',
//         title: 'mercadito || Fede',
//         products,
//         styles: 'homeStyles.css' 
//     })
// })

router.get('/chat', (req, res) => {
    const { socketServer } = req

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

    res.render('chat', {
        styles: 'homeStyles.css' })
})

export default router