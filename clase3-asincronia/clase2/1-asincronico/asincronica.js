const escribirArchivo = require('./escrArch.js')

logger.info('inicio del programa')

// el creador de esta funcion la definió
// como no bloqueante. recibe un callback que
// se ejecutará al finalizar la escritura.


escribirArchivo('hola mundo', () => {
  logger.info('terminé de escribir el archivo')
})

logger.info('fin del programa')

// se mostrará por pantalla:
// > inicio del programa
// > fin del programa
// > terminé de escribir el archivo




// logger.info(1)
// logger.info(2)
// setInterval(() => {
//   logger.info(3)
// },2000)
  
// logger.info(4)