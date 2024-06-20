const multer = require('multer')
const { dirname } = require('path')


// destino archivos nombre
const storage = multer.diskStorage({
    destination:  function(req, file, cb) {
        cb(null, `${dirname(__dirname)}/public/uploads`)
    },
    filename: function(req, file, cb) {
        console.log('file: ',file)
        cb(null, `${Date.now()}-${file.originalname}`)        
    }
})

const uploader = multer({ 
    storage, 
    onError: function(err,next){
        console.log(err)
        next()
    }
})

module.exports = { uploader }