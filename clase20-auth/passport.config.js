import passport from 'passport'
import local from 'passport-local'
import { UsersManagerMongo } from '../dao/usersManagerMongo.js'
import { crateHash, isValidPAssword } from '../utils/bcrypt.js'

const LocalStrategy = local.Strategy
const userService = new UsersManagerMongo()

export const initializePassport = () => {
    // middleware -> estrategia -> local -> username(email), password
    passport.use('register', new LocalStrategy({
        passReqToCallback: true, // req -> body -> passaport -> obj Req
        usernameField: 'email'
    }, async( req, username, password, done ) => {
          const { first_name, last_name } = req.body
            try {
                // verificar si existe el usuario
                let userFound = await userService.getUserBy({email: username})
                if(userFound) {
                    console.log('el usuario ya existe')
                    return done(null, false)
                }
                // crear el uusario 
                let newUser = {
                    first_name,
                    last_name,
                    email: username,
                    password: crateHash(password)
                }
                let result = await userService.createUser(newUser) // _id
                return done(null, result)
            } catch (error) {
                return done('error al registrar el usuario '+error)   
            }
    }))


    passport.use('login', new LocalStrategy({
        usernameField: 'email'
    }, async(username, password, done)=>{
        try {
            const user = await userService.getUserBy({email: username})
            if(!user) {
                console.log('usuario no encontrado')
                return done(null, false)
            }
            if(!isValidPAssword(password, {password: user.password})) return done(null, false)
            return done(null, user) // req.user // password 
        } catch (error) {
            return done(error)
        }
    }))

    passport.serializeUser((user, done)=>{
        done(null, user._id)
    }) // _id-> session

    passport.deserializeUser(async(id, done)=>{
        try {
            let user = await userService.getUserBy({_id: id})
            done(null, user)
        } catch (error) {
            done(error)
        }
    }) // session -> user
}

