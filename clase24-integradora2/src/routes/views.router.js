const { Router } = require('express')
const { uploader } = require('../utils/multer')

const router = Router()


router.get('/login', (req, res)=>{
    res.render('login')
})
router.get('/register', (req, res)=>{
    res.render('register')
})


router.post('/upload-file', uploader.single('myfile'),(req, res)=>{
    res.render('succesFile', {
        
    })
})

module.exports = router
