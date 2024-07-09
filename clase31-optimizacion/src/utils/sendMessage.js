export const sendMessage = (io) => {
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
}

