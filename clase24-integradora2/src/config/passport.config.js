const  passport = require('passport')
const  { Strategy, ExtractJwt} = require('passport-jwt')
const  { PRIVATE_KEY } = require('../utils/jwt')

const JWTStrategy = Strategy
const JWTExtract = ExtractJwt

// eligen si mandamos por cookie  o por headers 
const cookieExtractor = req => {
    let token = null
    if(req && req.cookies) token = req.cookies['token']
    return token
}

exports.initializePassport = () => {
    // midd/estrategia
    passport.use('jwt', new JWTStrategy({
        jwtFromRequest: JWTExtract.fromExtractors([cookieExtractor]),
        secretOrKey: PRIVATE_KEY
    }, async (jwt_payload, done)=>{
        try {
            return done(null, jwt_payload)
        } catch (error) {
            return done(error)
        }
    }))
}

