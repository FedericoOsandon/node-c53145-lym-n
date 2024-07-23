const multer = require('multer')
const { dirname } = require('node:path')
// función dirname() 
logger.info(dirname(__dirname))
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, dirname(__dirname)+'/public/uploads')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}-${file.originalname}`)
        
    }
})

const uploader = multer({
    storage
})

module.exports = {
    uploader
}