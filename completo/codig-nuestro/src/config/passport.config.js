const passport = require("passport")
const jwt = require('passport-jwt')
const { config } = require("./config")

const JWTStrategy = jwt.Strategy // core de la estrategia de jwt
const ExtractJWT = jwt.ExtractJwt // Extractor de jwt ya sea de headers, cookie, etc

const cookieExtractor = req => {
    let token = null
    if (req && req.cookies) { // corroboramos que hay alguna cookie que tomar
        token = req.cookies['token'] // tomamos solo la cookie que necesitamos
        // console.log('cookie extractor',req.cookies)
    }
    // console.log('token: ', token)
    return token
}

const initializePassport = () => {
    passport.use('jwt', new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
        secretOrKey: config.jwt_private_key, // Corrobora qeu sea el mimso secret que app.js
    }, async (jwt_payload, done) => {        
            try {
                // console.log('jwt_payload', jwt_payload)
                return done(null, jwt_payload)
            } catch (error) {
                return done(error)
            }
        })
    )
}

module.exports = {
    initializePassport
}

