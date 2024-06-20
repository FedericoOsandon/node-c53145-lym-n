const multer = require('multer')
const fs = require('fs')
const { dirname } = require('path')


// destino archivos nombre
// const storage = multer.diskStorage({
//     destination:  function(req, file, cb) {
//         cb(null, `${dirname(__dirname)}/public/uploads`)
//     },
//     filename: function(req, file, cb) {
//         console.log('file: ',file)
//         cb(null, `${Date.now()}-${file.originalname}`)        
//     }
// })

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      let folder = '';
      if (file.fieldname === 'profile') {
        folder = 'profiles';
      } 
      if (file.fieldname === 'products') {
        folder = 'products';
      } 
      if (file.fieldname === 'documents'){
        folder = `documents`; // Carpeta específica para el usuario
      }
      const uploadFolder = `uploads/${req.params.uid}/${folder}`; // Carpeta de destino

      if (!fs.existsSync(uploadFolder)) {
        fs.mkdirSync(uploadFolder, { recursive: true }); // Crear la carpeta de destino si no existe
      }
      cb(null, uploadFolder)
    },
    filename: (req, file, cb) => {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, Date.now() + '-' + file.originalname)
    },
  });

const uploaderUser = multer({ 
    storage, 
    // limits: {
    //     fileSize: 1024 * 1024 * 2 // 5MB
    // },
    // fileFilter: function (req, file, cb) {
    //     // Filtrar qué tipos de archivos se permiten subir
    //     if (
    //       file.mimetype === 'image/jpeg' ||
    //       file.mimetype === 'image/png' ||
    //       file.mimetype === 'application/pdf'
    //     ) {
    //       cb(null, true); // Permitir la carga del archivo
    //     } else {
    //       cb(new Error('Formato de archivo no válido')); // Rechazar el archivo
    //     }
    //   },
    onError: function(err,next){
        console.log(err)
        next()
    }
})

module.exports = { uploaderUser }