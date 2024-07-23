import jwt from 'jsonwebtoken'


const PRIVATE_KEY = 'CoderKeyS@cretToken'

export const generateToken = user => jwt.sign({user}, PRIVATE_KEY, {expiresIn: '24h'})
//      Bearer jfasldjflasjdflasdjflasdjlfjasdldjflasdjflasjn-as.dfjasdfosdaf

// validar que venga por cabecera (header - coookie)

export const authTokenMiddlerware = (req, res, next) => {
    const authHeader = req.headers.authorization
    logger.info(authHeader)
    if(!authHeader) return res.status(401).send({status: 'error', error: 'Not authenticated'})

    const token = authHeader.split(' ')[1]
    jwt.verify(token, PRIVATE_KEY, (error, credential) => {
        if(error) return res.status(401).send({status: 'error', error: 'Not authorized'})
        req.user = credential.user
        next()
    })
}


