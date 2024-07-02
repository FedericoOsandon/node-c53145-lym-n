// console.log(process)
// console.log(process.cwd())
// console.log(process.pid)
// console.log(process.memoryUsage())
// console.log(process.argv)
// console.log(process.version)

// console.log(process.argv)

// console.log(process.argv.slice(2))

// 1 node .\process.js primero y segundo
// 2 node .\process.js 1 2  3 
// 2 node .\process.js --mode development

// comander 



// import { Command } from 'commander'

// const program = new Command()

// program
//     .option('-d', 'Variable para debug', false)
//     .option('-p <port>', 'puerto del server', 8080)
//     .option('--mode <mode>', 'modo de trabajo de mi server', 'production')
//     .option('-u <user>', 'usuario utilzando el applicativo', 'no se ha declarado user')
//     .option('-l, --letters [letters...]', 'specify letter')

// program.parse()

// console.log('Options: ', program.opts())
// console.log('Argumentos: ', program.args)

// node process.js -d -p 3000 --mode development -u root --letters a b s
// node process.js -p 3000  -u root 2 a 5 --letters a b s


// process.env.ALGO_MAS


// listener process .on(event, cb)

process.on('exit', code => {
    console.log('antes de salir de processo', code)
})

process.on('uncaughtException', exception => {
    console.log('ESte atrapa todos los errores no controlados, una variable o función que no exista', exception)
})

// process.on('message', message => {
//     console.log('Mandar mensajes a otro processo')
// })

console.log('ejecutando cód')
console.log(fede)

// processos hijos
