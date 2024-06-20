const {dirname} = require('path')
const { createTransport } = require('nodemailer')
const config = require('../config/config.js')



const transport = createTransport({
    service: 'gmail',
    port: 578,
    auth: {
        user: config.TEST_MAIL,
        pass: config.MAIL_PASS
    }
}) 

let user = {
    nombre: 'Federico',
    apellido: 'Osandón'
}
const subject = 'Mail de prueba desde server'

const html =    `<div>
                    <h1>Bienvenido ${user.nombre} - ${user.apellido}</h1>
                    <img src="cid:logo1" >
                </div>`

const attachments = [
    {
        filename: 'Node.png',
        path: `${dirname(__dirname)}/public/images/Node.png`,
        cid: 'logo1'
    }
]

const sendMail = async ({subject='', html='', attachments}) => {
    console.log(subject, html, attachments)
    
    return await transport.sendMail({
        from:'Servicio de Node <defe014@gmail.com>',
        to: config.TEST_MAIL,
        subject,
        html,
        attachments: attachments ? attachments : []
    })
}

module.exports = {
    sendMail
}