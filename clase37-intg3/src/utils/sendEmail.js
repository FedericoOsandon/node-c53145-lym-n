const { createTransport } = require('nodemailer')
const { objectConfig } = require('../config')

const { gmail_pass, gmail_user } = objectConfig

const transport = createTransport({
    service: 'gmail',
    port: 578,
    auth: {
        user: gmail_user,
        pass: gmail_pass
    }
})

exports.sendEmail = async ({ userMail, subject, html }) => {
    return await transport.sendMail({
        from: 'Email de prueba <projectodigitalgen@gmail.com>',
        to: userMail,
        subject,
        html
    })
}