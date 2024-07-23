import { Router } from 'express'

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
        logger.info('nuevo cliete conectado')
    
        // socket.on('message', data => {
        //     logger.info(data)
        // })
    
        // socket.emit('socket_individual', 'Este mensaje lo debe ecibir este los socket')
    
        // socket.broadcast.emit('para_todos_menos_el_actual', 'este evento lo verán todos los socket conectados menos el actual.')
    
        // socketServer.emit('eventos_para_todo', 'Este mensjae lo reciben todos los socket incluido el actual')
    
        const messages = []
    
        // enviar mensajes viejos
    
        socket.on('mensaje_cliente', data => {
            logger.info(data)
    
            messages.push({id: socket.id, messge: data})
            
            socketServer.emit('messages_server', messages)
        })
    })

    res.render('chat', {
        styles: 'homeStyles.css' })
})

export default router
