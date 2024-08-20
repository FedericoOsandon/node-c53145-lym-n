const { Router } = require('express')
const usersController = require('../controllers/users.controller.js')

const router = Router()

router.get('/',usersController.getAllUsers)
router.get('/:uid',usersController.getUser)
router.post('/', usersController.createUser)
router.put('/:uid',usersController.updateUser)
router.delete('/:uid',usersController.deleteUser)


module.exports = router