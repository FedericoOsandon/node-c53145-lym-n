const { Router } = require('express')
const { sendMail } = require('../utils/sendMail')
const { sendMessages } = require('../utils/sendMessage')

const router = Router()


router.get('/email', async (req, res) => {
    try {
        await sendMail()
        res.send({
            status: 'success',
            payload: 'Mensaje enviado'
        })
    } catch (error) {
        console.log(error)
    }
})

router.get('/sms', async (req,res)=>{
    try {
        
        await sendMessages()
        res.send({
            status: 'success',
            payload: 'mensaje enviado'
        })
    } catch (error) {
        console.log(error)
    }
})

module.exports = router