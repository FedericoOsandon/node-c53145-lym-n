// importacion jwt
const jwt = require('jsonwebtoken')
const { config: {jwt_private_key} } = require('../config/config')


// crear la funcion que genera el token llamada generateToken
const generateToken = ({user={}, expiresIn='24'}) => {
    // logger.info(user)
    const token = jwt.sign(user, jwt_private_key, {expiresIn})
    return token
}

const authToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    
    if (!authHeader) return res.status(401).send({status: 'error',error: 'Not authenticated'})

    const token = authHeader.split(' ')[1]
    jwt.verify(token, jwt_private_key, (err, credentials) => {
        if (err) return res.status(403).send({status: 'error',error: 'Not authenticated'})

        req.user = credentials.user
        
        next()
    })
}

module.exports = {
    generateToken,
    authToken
}