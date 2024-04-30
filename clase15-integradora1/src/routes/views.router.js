const { Router } = require('express')
const { uploader } = require('../utils/multer')

const router = Router()

router.get('/', (req, res)=>{
    res.render('index')
})
router.get('/login', (req, res)=>{
    res.render('index')
})
router.get('/register', (req, res)=>{
    res.render('index')
})
router.get('/products', (req, res)=>{
    res.render('index')
})
router.get('/prfile', (req, res)=>{
    res.render('index')
})
router.get('/prfile', (req, res)=>{
    res.render('index')
})

router.post('/upload-file', uploader.single('myfile'),(req, res)=>{
    res.render('succesFile', {
        
    })
})

module.exports = router
