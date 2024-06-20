const twilio = require('twilio')
const config = require('../config/config.js')

const cliente = twilio(config.ACCOUNT_SID, config.AUTH_TOKEN)

let user = {
    nombre: 'Federico',
    apellido: 'Osandón'
}

const sendMessages = async () =>  cliente.messages.create({
    body: `Gracias ${user.nombre} ${user.apellido} por la compra`,
    from: 'whatsapp:+14155238886',
    to: `whatsapp:${ config.NUMBER_MIO }`
})

module.exports = {
    sendMessages
}