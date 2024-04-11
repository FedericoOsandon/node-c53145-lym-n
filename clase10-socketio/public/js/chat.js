// console.log('Bienvenidos al chat')

const socket = io()
// ejemplo en clase
// socket.emit('message', 'esto es data en forma de string')

// socket.on('socket_individual', data => {
//     console.log(data)
// })


// socket.on('para_todos_menos_el_actual', data => {
//     console.log(data)
// })
// socket.on('eventos_para_todo', data => {
//     console.log(data)
// })



const input = document.getElementById('message')
const messageList = document.getElementById('list-message')

input.addEventListener('keyup', evt => {
    if(evt.key === 'Enter'){
        socket.emit('mensaje_cliente', input.value)
        input.value= ''
    }
})
// manager create get
socket.on('messages_server', data => {
    console.log(data)
})
