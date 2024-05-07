export const productsSocket = (socketServer) => {
    return (req, res, next) => {
        req.socketServer = socketServer
        return next()
    }

}

