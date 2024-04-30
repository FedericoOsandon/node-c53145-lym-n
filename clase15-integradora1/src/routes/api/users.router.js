const { Router } = require('express')
const { usersModel } = require('../../models/users.model')

const router = Router()

router.get('/', async(req, res) => {
    const users = await usersModel.find({})
    res.send({status: 'success', users})
})

router.post('/', async (req, res) => {
    const { body } = req
    const result = await usersModel.create(body)
    res.send({status: 'success', data: result})
})

router.get('/:uid', async (req, res) => {
    const { uid } = req.params
    const userFound = await usersModel.findOne({_id: uid})
    res.send({status: 'success', payload: userFound})
})
router.put('/:uid', (req, res) => {
    res.send('update User')
})
router.delete('/:uid', (req, res) => {
    res.send('delete User')
})


module.exports = router