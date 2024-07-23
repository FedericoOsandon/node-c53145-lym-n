export const sendMessage = (io) => {
    let messages = [] // simular un db mock 
    // manager chat - productos 
    // socketServer -> io 
    io.on('connection', socket => {
        logger.info('Cliente conectado')
    
        socket.on('message', data => {
            logger.info('message data: ', data)
            // guardamos los mensajes
            messages.push(data)
            // emitimos los mensajes
            io.emit('messageLogs', messages)
        })
    })
}

