const { productService } = require("../services")

initChatSocket = (io) => {        
    const mensajes = [
        // {user: 'Fede', message: 'Hola como están'}
    ]
    let connectedClients = []

    io.on('connection', socket => {
        // console.log('Nuevo cliente conectado')
        connectedClients.push(socket)
        console.log(`Cliente conectado. Total de clientes conectados: ${connectedClients.length}`)

        socket.on('message', data => {
            console.log('message',data)
            mensajes.push(data)
            io.emit('messageLogs', mensajes)
            // persisti 
        })

        socket.on('authenticated', data => {
            
            socket.broadcast.emit('newUserConnected', data)
        })
        
        socket.on('disconnect',()=>{
            connectedClients = connectedClients.filter((client) => client !== socket)
            console.log(`Cliente desconectado. Total de clientes conectados: ${connectedClients.length}`)
        })
    })
}


const initProductsSocket = (io) => {
    let config = {
        limit: 5,
        page: 1,
        sort: 1
    }
    return io.on('connection', async socket =>{
        // console.log(socket)
        // console.log('Bienvenido a realtime product')
        const {docs} = await productService.getProducts(config)
        // console.log(docs)
        // const products = docs
        socket.emit('productsList', docs )

        socket.on('addProduct', async data =>{
            const {title, price, thumbnail, stock, category, description} = data
            // products.push(data)
            const product = await productService.createProduct({
                title,
                price: parseInt(price),
                imageUrl: thumbnail,
                stock: parseInt(stock),
                category,
                description
            })
            // console.log(product)
            if (!product) return console.log('Ocurrio un error al ingresar un producto')
            const {docs} = await productService.getProducts(config)
            // console.log(docs)
            const products = docs
            io.sockets.emit('productsList', products)
        })
    })
}


module.exports = {
    initChatSocket,
    initProductsSocket
}