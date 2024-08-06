const { Router } = require('express')
const { usersModel } = require('../../daos/MONGO/models/users.model')
const { UserController } = require('../../controllers/users.controller')

const router = Router()
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = new UserController()

router.get('/',getUsers)

router.post('/', createUser)

router.get('/:uid', getUser)
router.put('/:uid', updateUser)
router.delete('/:uid', deleteUser)


module.exports = router