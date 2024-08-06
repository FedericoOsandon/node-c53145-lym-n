const { Command } = require('commander') 

const commander = new Command()

commander   
    .option('--mode <mode>', 'Modo de ejecución de nuestro server', 'production')
    .parse()
    
module.exports = {
    commander
}