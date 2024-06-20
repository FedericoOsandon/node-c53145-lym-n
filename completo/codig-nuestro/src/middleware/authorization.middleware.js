const authorization = (role) => {
    return async (req, res, next) => {
        // Ya el middleware de autenticación debería cubrir esto, pero mas vale prevenir.
        
        if(!req.user) return res.status(401).json({status: 'error', error: 'Unauthorized'})
        if(req.user.role!==role) return res.status(403).json({status: 'error', error: 'No permissions'})
        next()
    }
}

module.exports = {
    authorization
}