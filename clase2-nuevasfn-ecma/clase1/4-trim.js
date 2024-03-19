// ES10 y ESC11 trim() - flat()


let nombre = '            Hola fede '
console.log(nombre)

let mensajes = []
let intentoMensaje= `                          `

if (intentoMensaje.trim.length > 0) {   
    mensajes.push(intentoMensaje.trim())    
} else {
    console.log('Mensaje vacío, para poder enviar un mensaje, favor de escribir algo')
}

const array = [1, 2, [3, 4], [5, 6, 7], 8, 9, 10]

// console.log(nombre.trim())
console.log(array.flat())