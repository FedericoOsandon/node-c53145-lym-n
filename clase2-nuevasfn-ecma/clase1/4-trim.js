// ES10 y ESC11 trim() - flat()


let nombre = '            Hola fede '
logger.info(nombre)

let mensajes = []
let intentoMensaje= `                          `

if (intentoMensaje.trim.length > 0) {   
    mensajes.push(intentoMensaje.trim())    
} else {
    logger.info('Mensaje vacío, para poder enviar un mensaje, favor de escribir algo')
}

const array = [1, 2, [3, 4], [5, 6, 7], 8, 9, 10]

// logger.info(nombre.trim())
logger.info(array.flat())