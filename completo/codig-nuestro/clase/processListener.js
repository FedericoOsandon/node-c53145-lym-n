process.on('exit', code => {
    console.log(`Este código se ejecutará justo antes de salir del proceso.`)
})
process.on('uncaughtException', exception => {
    console.log(`Este código atrapa todas las excepciones no contraladas, como llamar a una función que no haya sido declarada.`)
})

process.on('message', message => {
    console.log(`Este código se ejecutará cuando reciba un mensaje de otro proceso.`)
})

console()