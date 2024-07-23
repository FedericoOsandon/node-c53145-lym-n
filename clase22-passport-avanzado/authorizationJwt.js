export const atuhorization = role => {
    return async (req, res, next) => {
        logger.info(req.user)
        // repetido 
        if (!req.user) return res.status(401).send({error: 'Unauthoized'})
        if(req.user.user.role !== role)  return    res.status(401).send({error: 'Not permissions'})
        next()
    }
}