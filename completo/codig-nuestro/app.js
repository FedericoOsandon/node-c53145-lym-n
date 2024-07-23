const { 
    // httpServer, 
    initServer 
} = require("./src/server.js")
const cluster = require("cluster")
const { cpus } = require("os")
const configObject = require("./src/config/config.js")
const { logger } = require("./src/middleware/logger.js")

// const PORT = configObject.PORT
// const numeroCPUs = cpus().length

// logger.info(`pid: ${process.pid}, is Primary?:  ${cluster.isPrimary}`)
// logger.info(`El número de CPUs es: ${numeroCPUs}`)

// if (cluster.isPrimary) {
//     logger.info(`Proceso primario, generando proceso trabajador...`)
//     for (let i = 0; i < numeroCPUs; i++){
//         cluster.fork()
//     }
//     cluster.on('message', worker => {
//         logger.info(`El worker ${worker.process.pid} dice: ${worker.message}`)
//     })
// } else {
//     logger.info(`Al ser un proceso forkeado, no cuento como primario, por lo tanto isPrimary es=${cluster.isPrimary}, entonces soy un worker`)
//     logger.info(`Me presento, soy un proceso worker con pid ${process.pid}`)
   
// httpServer.listen(PORT,err =>{
//     if (err)  logger.info(err)
//     logger.info(`Escuchando en el puerto ${httpServer.address().port }`)
// })
    initServer()
// }



// comando para ir ejecutando en cmd
// tasklist /fi "imagename eq node.exe"
// artillery quick --count 40 --num 50 "http://localhost:8080/pruebas/simple" -o resSimple.json
// artillery quick --count 40 --num 50 "http://localhost:8080/pruebas/compleja" -o resCompleja.json 