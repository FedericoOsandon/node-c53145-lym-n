const  { Router } = require('express')

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

router.get('/', (req, res) => {
    res.render('index', {})
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

// router.get('/chat', (req, res) => {
//     const { socketServer } = req

//     socketServer.on('connection', socket => {
//         console.log('nuevo cliete conectado')
    
//         // socket.on('message', data => {
//         //     console.log(data)
//         // })
    
//         // socket.emit('socket_individual', 'Este mensaje lo debe ecibir este los socket')
    
//         // socket.broadcast.emit('para_todos_menos_el_actual', 'este evento lo verán todos los socket conectados menos el actual.')
    
//         // socketServer.emit('eventos_para_todo', 'Este mensjae lo reciben todos los socket incluido el actual')
    
//         const messages = []
    
//         // enviar mensajes viejos
    
//         socket.on('mensaje_cliente', data => {
//             console.log(data)
    
//             messages.push({id: socket.id, messge: data})
            
//             socketServer.emit('messages_server', messages)
//         })
//     })

//     res.render('chat', {
//         styles: 'homeStyles.css' })
// })

module.exports = router
