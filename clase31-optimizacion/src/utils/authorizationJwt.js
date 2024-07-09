export const atuhorization = (roles) => {
    return async (req, res, next) => {
        // roles[0] === PUBLIC -> next()
        console.log(req.user)
        // repetido 
        if (!req.user) return res.status(401).send({error: 'Unauthoized'})
        if(req.user.user.role !== role)  return    res.status(401).send({error: 'Not permissions'})
        next()
    }
}

// 
// eliminar productos - user-premium - admin
// router.use('/api/users/current', passportCall('jwt),authorization( [ 'PUBLIC'] ), (req, user) => {ver user}) 

    // cliente - servidor  token(role: user)

    // { user.role === 'admin' && mostras el botón  }