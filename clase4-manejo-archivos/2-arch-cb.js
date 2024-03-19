const fs = require('fs') 
// cb(error, arg)

// escribir un archivo

// fs.writeFile('./asinc-cb.txt', 'esto es un contenido', 'utf-8', (error)=>{
//     if (error) return console.log(error)
//     // acciones
//     fs.appendFile('./asinc-cb.txt', '\nesto es un agregado', 'utf-8', (err)=>{
//         if(err) return console.log(err)
//         console.log('listo')
//     })

// })  // asincrónico

// agregar

// fs.appendFile('./data.txt', '\nesto es un agregado', 'utf-8', (err)=>{
//     if(err) return console.log(err)
//     console.log('listo')
// })

// leer un archivo
// let contenido = null
// fs.readFile('./data.txt', 'utf-8', (error, contenidoDataFile)=>{
//     if (error) return console.log(error.message)

//     contenido = contenidoDataFile
//     console.log('contenido: ', contenido)

// })


// eliminar

fs.unlink('./data.txt', (error) => {
    if(error) return console.log(error)

    console.log('archivo eliminado')
})