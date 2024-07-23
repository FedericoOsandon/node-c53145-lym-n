process.on('exit', code => {
    logger.info(`Este código se ejecutará justo antes de salir del proceso.`)
})
process.on('uncaughtException', exception => {
    logger.info(`Este código atrapa todas las excepciones no contraladas, como llamar a una función que no haya sido declarada.`)
})

process.on('message', message => {
    logger.info(`Este código se ejecutará cuando reciba un mensaje de otro proceso.`)
})

console()