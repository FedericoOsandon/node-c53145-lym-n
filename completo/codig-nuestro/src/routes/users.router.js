const Router = require('./router.js')
const { 
    getUsers,
    getUser, 
    createUser,
    updateUser,
    deleteUser,
    upgradeToPremiun,
    uploadDocuments
} = require('../controllers/users.controller.js')

const jwt = require('jsonwebtoken')
const { uploaderUser } = require('../utils/multerUserDocument.js')

class UserRouter extends Router {
    // constructor de la clase routerClass
    init(){
        this.get('/',              ['PUBLIC'],getUsers)
        this.get('/:uid',          ['PUBLIC'], getUser)
        this.post('/',             ['PUBLIC'], createUser)
        this.post('/premiun/:uid', ['PUBLIC'], upgradeToPremiun)
        this.put('/:uid',          ['PUBLIC'], updateUser)
        this.delete('/:uid',       ['PUBLIC'], deleteUser)
        this.post('/:uid/documents', 
            ['PUBLIC'], 
            uploaderUser.array('documents',5),
            // up loaderUser.single('products'),
            // uploaderUser.single('profile'),
            uploadDocuments
        )        
        // this.get('/', ["PUBLIC"], (req, res) =>{
        //     // solo me limito a enviar el payload
        //     res.sendSuccess('Hola UserRouter')
        // })

        // this.get('/currentUser', ["USER", "USER_PREMIUN"], (req,res)=>{
        //     res.sendSuccess(req.user)
        // })
        
        // this.post('/login', ["PUBLIC"], (req, res) => {
        //     // usuario hardcordeado, lo que nos importa 
        //     // aquí es la asignación del role.
        //     let user = {
        //         email: req.body.email,
        //         role: 'user'
        //     }
        //     console.log(user)
            
        //     let token = jwt.sign(user, 'CoderSecretClassRouter')
        //     res.sendSuccess({token})
        // })
    }
}



module.exports = new UserRouter()
