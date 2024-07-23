// logger.info(process)
// logger.info(process.cwd())
// logger.info(process.pid)
// logger.info(process.memoryUsage())
// logger.info(process.argv)
// logger.info(process.version)

// logger.info(process.argv)

// logger.info(process.argv.slice(2))

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

// logger.info('Options: ', program.opts())
// logger.info('Argumentos: ', program.args)

// node process.js -d -p 3000 --mode development -u root --letters a b s
// node process.js -p 3000  -u root 2 a 5 --letters a b s


// process.env.ALGO_MAS


// listener process .on(event, cb)

process.on('exit', code => {
    logger.info('antes de salir de processo', code)
})

process.on('uncaughtException', exception => {
    logger.info('ESte atrapa todos los errores no controlados, una variable o función que no exista', exception)
})

// process.on('message', message => {
//     logger.info('Mandar mensajes a otro processo')
// })

logger.info('ejecutando cód')
logger.info(fede)

// processos hijos
