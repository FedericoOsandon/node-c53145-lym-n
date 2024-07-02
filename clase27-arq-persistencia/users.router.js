import { Router } from 'express'
import UserController from '../../controllers/users.controller.js'

const router = Router()
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} = new UserController()


router.get('/',        getUsers)
router.get('/:uid',    getUser)
router.post('/',       createUser)
router.put('/:uid',    updateUser)
router.delete('/:uid', deleteUser)


export default router
