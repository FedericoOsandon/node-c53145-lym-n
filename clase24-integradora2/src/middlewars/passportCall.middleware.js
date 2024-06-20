const passport = require("passport");

exports.passportCall = strategy => {
    return (req, res, next) => {
        // user -> done(null, jwt_payload)
        passport.authenticate(strategy, (err, user, info) =>{
            if(err) return next(err)
            if(!user) return res.status(401).send({status: 'error', error: info.message ? info.message : info.toString()})
            req.user = user
            next()
        })(req, res, next)
    }
}

