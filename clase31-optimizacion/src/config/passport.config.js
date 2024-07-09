import passport from 'passport'
import jwt from 'passport-jwt'
// import { UsersDaoMongo } from '../daos/MONGO/usersDao.mongo.js'
import { crateHash, isValidPAssword } from '../utils/bcrypt.js'
import { PRIVATE_KEY } from '../utils/jsonwebtoken.js'

// const userService = new UsersManagerMongo()
const JWTStrategy = jwt.Strategy
const ExtractJWT  = jwt.ExtractJwt


export const initializePassport = () => {
    // jwt
    // función creada por nosotros para leer las cookie
    const cookieExtractor = req => {
        let token = null
        if (req && req.cookies) {
            token = req.cookies['token']
        }
        return token
    }

    passport.use('jwt', new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
        secretOrKey: PRIVATE_KEY
    }, async (jwt_payload, done) => {
        try {
            // if(true) return done(null, false, {messages: 'No user found'})
            
            return done(null, jwt_payload)
        } catch (error) {
            return done(error)
        }
    }))
}

