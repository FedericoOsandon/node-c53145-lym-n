const http = require('http')

// const server = http.createServer((peticion, respuesta) => {
// const server = http.createServer((request, response) => {
const server = http.createServer((req, res) => {
    logger.info(req.url)
    const { url } = req
    if(url==='/') return res.end('Hola, este es mi primer servidor')
    if(url==='/nombre') return res.end('Mi nombre es servidoreitor')
})
// localhost:8000 -> 127.0.0.1
server.listen(8000, err => {
    if(err) logger.info(err)

    logger.info('Server escuchando en puerto 8000')
})


// endpoint 
// dominio  https://plataforma.coderhouse.com/ 
// dominio  https://plataforma.coderhouse.com/cursos 
// dominio  https://plataforma.coderhouse.com/cursos/6546543 