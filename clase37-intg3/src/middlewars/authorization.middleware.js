exports.authorization = (roles )=> {
    return async (req,res,next) => {
        if(roles[0].toUpperCase() === 'PUBLIC') return next()
        if(!req.user) return res.status(401).send({status: 'error', error: 'Unauthorized'})
        // if(req.user.role !== role) return res.status(403).send({status: 'error', error: 'not permissions'})
        if(roles.toUpperCase().includes(req.user.role.toUpperCase())) return res.status(403).send({status: 'error', error: 'not permissions'})
        next()
    }
}