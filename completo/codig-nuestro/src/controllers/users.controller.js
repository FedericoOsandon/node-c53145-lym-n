const { userService } = require('../services')
const CustomError = require('../utils/errors/CustomeError')
const EErrors = require('../utils/errors/enums')
const { generateUserErrorInfo } = require('../utils/errors/info')

class UserController {

    getUsers = async (req, res) =>{    
        try {  
            const { limit=5, page=1 }= req.query            
            const result = await userService.getUsers(parseInt(limit), parseInt(page))   
            // logger.info(result)         
            res.status(200).send({
                status: 'success',
                payload: result
            })
        } catch (error) {
            logger.info(error) 
        }
    }

    getUser = async (request, response) => {
        try {
            const {uid} = request.params
            const result = await userService.getUser(uid)
            response.status(200).send({
                status: 'success',
                payload: result
            })            
        } catch (error) {
            logger.info(error)
        }
    }

    createUser = async (req, res = response, next) =>{
        //mada el  cliente request 
        try {
            let {nombre, apellido, email } = req.body
            if (!nombre || !apellido || !email) {
                // logger.info( new Error('Che pasar todos los datos', {causa: 'opcional'}))
                CustomError.createError({
                    name: 'User creation error',
                    cause: generateUserErrorInfo({
                        first_name: nombre, 
                        last_name: apellido, 
                        email
                    }),
                    message: 'Error Trying to create user',
                    code: EErrors.INVALID_TYPES_ERROR
                })
                
                // return res.status(400).send({ 'error': error})
            }
    
            // let result  = await userService.createUser({            
            //                     nombre,
            //                     apellido,
            //                     email
            //                 })
            // validación
        
            res.status(201).send({ 
                status: 'success',
                payload: 'result'
            })
            
        } catch (error) {
            next(error)            
        }
            
        
    }

    
    upgradeToPremiun = async (req, res) => {
        try {
            
            const { uid } = req.params

            // Verificar si el usuario ha cargado los documentos requeridos
            const user = await userService.getUser(uid)
            if (!user.documents || user.documents.length < 3) {
              return res.status(400).json({ 
                status: 'error',
                error: `El usuario no ha terminado de procesar su documentación. Falta ${3 - user.documents.length} documento.` })
            }
            // logger.info(user)
            // logger.info(user.documents.length)
            // Actualizar al usuario a premium
            user.isPremium = true
            await user.save()

            res.status(200).send({
                status: 'success',
                payload: user,
                documentsLength: user.documents.length
            })
        } catch (error) {
            logger.info(error)
        }       
    }

    uploadDocuments = async (req, res) => {
        try {
            const { uid } = req.params
            // const { name } = req.body;
            const files = req.files
            logger.info(files.length)
            // Validar si se cargaron los documentos requeridos
            // if (!files || (files.length < 3)) {
            if (!files) {
                return res.status(400).json({ 
                    status: 'error',
                    error: 'Faltan datos o archivos requeridos.' })
            }
        
            // Obtener el usuario y agregar los documentos
            const user = await userService.getUser(uid)
            if (!user) {
              return res.status(404).json({ error: 'Usuario no encontrado.' })
            }
            logger.info(user)
        
            // Actualizar el usuario con los nuevos documentos y referencias generadas
            user.documents = user.documents || []
        
            files.forEach((file) => {
              user.documents.push({
                name: file.filename,
                reference: file.destination, // Utilizar el nombre de archivo generado por Multer como referencia
              })
            })
        
            let  result = await user.save()
        
            res.status(400).json({ 
                status: 'success', 
                payload: result
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Ocurrió un error en el servidor.' })
        }
    }

    updateUser = async (request, response) =>{

        const { uid } = request.params
        // venga el id   
    
        //mada el  cliente request 
        let { nombre, apellido, email }  = request.body
    
        if (!nombre || !apellido || !email) {
            return response.status(400).send({ message: 'Che pasar todos los datos'})
        }
    
        // let result = await UsersModel.findByIdAndUpdate({_id: uid}, { nombre }, { new: true })
        let result = await UserModel.updateOne({_id: uid}, { nombre })
    
        response.status(201).send({ 
            status: 'success',
            result : result //-> result
        })
    }

    deleteUser = async (req, res)=> {
        const { uid } = req.params
        await UserModel.deleteOne({_id: uid})
        
        res.status(200).send({ 
            status: 'success',
            result: true
         })
    }

}

module.exports = new UserController()