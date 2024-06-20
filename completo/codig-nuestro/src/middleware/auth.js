function auth (req, res, next){
    console.log('auth: ',req.session)
    // if (req.session?.user.name !== 'fede fede' || !req.session?.admin ) {
    if (req.session?.user.name !== 'fede fede' ) {
        return res.send('No estas autorizado para ver esta página, por favor')
    }
    
    return next()
}

module.exports = {
    auth
}