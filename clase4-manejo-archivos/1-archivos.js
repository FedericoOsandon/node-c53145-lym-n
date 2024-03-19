// fs (fileSystem)
// import fs from 'fs' -> type module 
// create read update delete

const fs = require('fs') // -> type common

// manejo de archivo sincrónico 

// fs.writeFileSync('./data.txt', 'esto es un contenidoñ\t asdfasdfasdf', 'utf-8')
// fs.writeFileSync('./data.json', 'esto es un contenidoñ\t asdfasdfasdf', 'utf-8')

// console.log(fs.existsSync('./data.txt'))

// leer un archivo
// if (fs.existsSync('./data.txt')) {
//     const archivo =  fs.readFileSync('./data.txt', 'utf-8')    
//     console.log(archivo)
// }else{
//     fs.writeFileSync('./data.txt', 'esto es un contenidoñ\t asdfasdfasdf', 'utf-8')
// }

// agregar contenido update
// fs.appendFileSync('./data.txt', 'contenido nuevo\n', 'utf-8')

// si no existe -> lo crea
// si existe agrega

// eliminar
// fs.unlinkSync('./data.txt')

 



// fs con callback