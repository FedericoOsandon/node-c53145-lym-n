const { Router } = require('express')
// const passport = require('passport')
// const { passportCall } = require('../utils/passportCall')
// const { authorization } = require('../middleware/authorization.middleware')
const { 
    getUsers, 
    getUser,
    createUser,
    updateUser,
    deleteUser,
    upgradeToPremiun,
    uploadDocuments
} = require('../../controllers/users.controller.js')
const { uploaderUser } = require('../../utils/multerUserDocument.js')

const router = Router()

router

    // .get('/', passportCall('jwt'), authorization('admin'),async (req, res) =>{
    //     res.send('ok')
    // })
    .get('/', getUsers)
    .get('/:uid', getUser)
    .post('/', createUser)
    .post('/premiun/:uid', upgradeToPremiun)
    .post('/:uid/documents', 
        uploaderUser.array('documents',5),
        // uploaderUser.single('products'),
        // uploaderUser.single('profile'),
        uploadDocuments
    )
    .put('/:uid', updateUser)
    .delete('/:uid', deleteUser)

module.exports = router



