const { Command } = require('commander')

const program = new Command()//inicializamos un nuevo comando de commander

program
    // primero: El comando, segundo: la descripcion, tercero: el valor por defecto
    .option('-d', 'Variable para debug', false)
    // port es el puerto a colocar
    .option('-p, --port <port>', 'Puerto para el servidor', 8080)
    // <mode> es el argumento a colocar
    .option('--mode <mode>', 'Modo de trabajo', 'production')
    // para requiedOption el tercer arg en un mensaje de error en caso que no se especifique
    .requiredOption('-u <user>', 'Usuario utilizando el aplicativo', 'No se ha declarado el usuario')
    // mensaje de error en caso de que no se especifique el argumento
    .option('-l, --letters [letters...]', 'specify the letters')

program.parse() // parsea se utiliza para cerra la configuracion de los comandos

console.log('Options: ', program.opts()) // muestra las opciones
console.log('Remaining Arguments: ', program.args) // muestra los argumentos

// Comandos para ejecutar:
// node commander.js -d -p 3000 --mode development -u root --letters a b c

// Options:  {
//     d: true,
//     port: '3000',
//     mode: 'development',
//     u: 'root',
//     letters: [ 'a', 'b', 'c' ]
//   }
// Remaining Arguments:  []

// node commander.js -p 3000 -u root 2 a 5 --letters

// Options:  {
//     d: false,
//     port: '3000',
//     mode: 'production',
//     u: 'root',
//     letters: true
//   }
//   Remaining Arguments:  [ '2', 'a', '5' ]