const { userModel } = require("../Dao/mongo/models/user.model")
const { logger } = require("../middleware/logger")
const { userService, cartService } = require("../services")
const { createHash, isValidPassword } = require("../utils/bcryptPass")
const { generateToken } = require("../utils/jwt")

class AuthController {
    

    registerUser = async (req, res)=>{ // con basae de datos
        try {
            const { first_name, last_name, email, password } = req.body

            // validar los datos recibidos
            if (!first_name || !last_name || !email || !password) return res.status(400).send({status: 'error', error: 'Values incomplete'})
            
            const exists = await userService.getUser(email)

            if (exists) return res.status(401).send({status: 'error', message: 'El usuario ya existe'})

            let cart = await cartService.createCart(email)
            // logger.info(cart)
            const hashedPassword = createHash(password)

            const newUser = {
                first_name,
                last_name,
                email,
                cartId: cart._id,
                password: hashedPassword
            }
            let result = await userService.createUser(newUser)   
            if (!result) return res.status(400).send({status: 'error', message: 'Error al crear el usuario'})         

            // // res.status(200).render('login',{
            // //     showNav: false
            // // })
            res.status(200).send({result})
        } catch (error) {
            logger.error(error)
        }
    }

    loginUser =  async (req, res)=>{
        const { email, password} = req.body    
        // validar los datos recibidos
        if (!email || !password) return res.status(400).send({status: 'error', error: 'Values incomplete'})
    
        const user = await userService.getUser(email)


        // logger.info(user)
        if (!user) return res.status(401).send({status: 'error', error: 'No se encuentra el usuario'})

        if (!user.cartId) {
            // Si no tiene un carrito, crea uno nuevo
            let newCart = await cartService.createCart(email)
      
            // Asocia el ID del carrito al usuario
            user.cartId = newCart._id;
            await user.save();
        }
        
        const isValidPass = isValidPassword(user, password)

        if (!isValidPass) return res.status(401).send({status: 'error', error: 'Usuario o contraseña incorrectos'})

        // generar un token para el usuario
        const { first_name, last_name, role } = user
        const token = generateToken({ user:{
            first_name,
            last_name, 
            email,
            role
        }, expiresIn: '24h'})

        // res.send({
        //     status:'success', 
        //     token
        // })
        res.cookie('token', token, {
            httpOnly: true, maxAge: 1000 * 60 * 60 * 24
        }).send({status:'success', token, cid: user.cartId._id})
    }

    logoutUser = async (req, res)=>{
        try {
            // session.destroy()
            // req.session.destroy(err => {
            //     if(err) return res.send({status:'Logout error', message: err})           
            // })
            // res.status(200).redirect('/api/auth/login')        

            res.clearCookie('token')
            res.status(200).redirect('/login')
        } catch (error) {
            logger.info(error)
        }
    }

    forgotPassword = async (req, res)=>{
        try {
            
            const { email } = req.body
            
            // buscar el usuario en la base de datos
            const {_doc: doc} = await userModel.findOne( {email})
            const {password, _id, ...user} = doc        
            logger.info(user)
            if (!user) return res.status(400).send({status: 'error', message: 'El usuario no existe'})
        
            // generar un token para el usuario
            const token = generateToken({user, expiresIn: '1h'})
            // logger.info(token)
            // configurar el mail
            const subject = 'Restablecer contraseña'
            const html = `
                            <p> Hola ${user.first_name}, </p>
                            <p> Has solicitado restablecer tu contraseña. Haz clic en el siguiente enlace para continuar:</p>
                            <a href="${base_url}/api/session/reset-password/${token}">Restablecer contraseña</a>
                            <p>Este enlace expirará en 1 hora.</p>
                        `
        
            // enviar un mail con el link para cambiar la contraseña
            await sendMail({
                subject,
                html
            })
        
            res.status(200).send({status: 'success', message: 'Mail enviado, revise su bandeja de entrada o spam'})
        } catch (error) {
            logger.info(error)
        }
    }

    resetPasswordToken = async (req, res)=>{
        try {
            const {token} = req.params
            res.render('resetPass', {token, showNav: false})
        } catch (error) {
            logger.info(error)
        }
    }

    resetPassword = async (req, res)=>{
        try {
            
            const { passwordNew, passwordConfirm, token } = req.body
          
            // validar las contraseñas recibidas si estan vacias y si son iguales
            if (!passwordNew || !passwordConfirm || passwordNew !== passwordConfirm) return res.status(400).send({
                status: 'error', 
                message: 'Las contraseñas no pueden estar vacías y deben coincidir'
            })
            if (passwordNew !== passwordConfirm) return res.status(400).send({status: 'error', message: 'Las contraseñas no coinciden'})
        
            const decodedUser = jwt.verify(token, jwt_private_key)
            
            
            if (!decodedUser) return res.status(400).send({status: 'error', message: 'El token no es válido o ha expirado'})
        
            // // buscar el usuario en la base de datos
            const {_doc: userDB} = await userModel.findOne( {email: decodedUser.email})
            
            if (!userDB) return res.status(400).send({status: 'error', message: 'El usuario no existe'})
        
            // verificar si las contraseñas sean iguales no es valida
            let isValidPass = isValidPassword(userDB, passwordNew)
            
            if (isValidPass) return res.status(400).send({status: 'error', message: 'No puedes usar una contraseña anterior.'})
           
            const result = await userModel.findByIdAndUpdate({_id: userDB._id}, {
                password: createHash(passwordNew)
            })
           
            if (!result) return res.status(400).send({status: 'error', message: 'Error al actualizar la contraseña'})
        
            res.status(200).send({
                status: 'success', 
                message: 'Contraseña actualizada correctamente'
            })
        } catch (error) {
            logger.info(error)
        }
    }

}

module.exports = new AuthController()