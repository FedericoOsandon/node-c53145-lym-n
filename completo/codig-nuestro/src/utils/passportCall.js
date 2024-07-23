const passport = require("passport");

const passportCall = strategy => {
    return async (req, res, next) =>{
        passport.authenticate(strategy, function(err, user,info){
            logger.info('passport call',user)
            if(err) return next(err)
            if(!user) return res.status(401).send({status: 'error', error: info.messages ? info.messages : info.toString()})
            req.user = user
            next()
        })(req, res, next)
    }
}

module.exports = {
    passportCall
}