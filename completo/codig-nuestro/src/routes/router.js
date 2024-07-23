const { Router } = require('express')
const jwt = require('jsonwebtoken')
const passport = require('passport')

class ClassRouter {
    constructor() {
        this.router = Router()
        this.init()
    }

    getRouter() {
        return this.router
    }

    init() {} // esta inicialización sera para sus clases heredadas

    applyCallbacks(callbacks) {
        // mapeamos los callbacks uno a uno, obteniendo sus parametros a partir de los ...params
        return callbacks.map(callback => async(...params)=> {
            try {
                // apply, ejecutará la función callback apuntando directamente a una
                // instancia de la clase, por ello, colocamos this para que utilice 
                // solo el contexto de este router, los parámetros son internos
                // de cada callback, sabemos que los params de un callback corresponden a 
                // req, res, next
                await callback.apply(this, params)
            } catch (error) {
                logger.info(error)
                // params[1] hace referencia a la res, por ello puedo mandar un send desde éste
                params[1].status(500).send(error)
            }
        })
    }

    generateCustomResponses = (req, res, next) => {
        // sendSuccess permitirá que el desarrollador
        // sólo tenga que enviar el payload, el formato
        // se gestionará de manera interna    
        res.sendSuccess = payload => res.send({status: "success", payload})
        res.sendServerError = err => res.status(500).send({status: "error", err})
        res.sendUserError = err => res.status(400).send({status: "error", err})
        next()
    }

    handlePolicies = policies => (req, res, next) =>{
        if (policies[0]==='PUBLIC') return next() // cualquiera puede entrar
        // const authHeaders = req.headers.authorization
        // const user = req.user
        logger.info('user', req.user)
        if(!req.user) return res.status(401).send({status: 'error', message: 'No autorizado'})
        // const token = authHeaders.split(" ")[1] // removemos en Bearer
        // // obtenemos el usuario a partir del toquen
        // let user = jwt.verify(token, 'CoderSecretClassRouter')
        // // El rod del usuario existe dentro del arrego de políticas
        // if(!policies.includes(req.user.role.toUpperCase())) return res.status(403).send({status: 'error', err: 'No permissions'})
        // logger.info(policies[0], req.user.role.toUpperCase())
        if(!policies.includes(req.user.role.toUpperCase())) return res.status(403).send({status: 'error', message: 'No permissions'})
        // req.user = user
        next()
    }

    passportCall = strategy => {
        return async (req, res, next) =>{
            passport.authenticate(strategy, function(err, user, info){
                if(err) return next(err)
                // if(!user) return res.status(401).send({status: 'error', error: info.messages ? info.messages : info.toString()})
                if(user) {
                    // logger.info('passportcall', user)
                    req.user = user
                    // logger.info('user jwt', req.user)
                }
                next()
            })(req, res, next)
        }
    }

    // handlePolicies = policies => (req, res, next) =>{
    //     if (policies[0]==='PUBLIC') return next() // cualquiera puede entrar
    //     const authHeaders = req.headers.authorization
    //     if(!authHeaders) return res.status(401).send({status: 'error', error: 'Unauthorized'})
    //     const token = authHeaders.split(" ")[1] // removemos en Bearer
    //     // obtenemos el usuario a partir del toquen
    //     let user = jwt.verify(token, 'CoderSecretClassRouter')
    //     // El rod del usuario existe dentro del arrego de políticas
    //     if(!policies.includes(user.role.toUpperCase())) return res.status(403).send({status: 'error', err: 'No permissions'})
    //     req.user = user
    //     next()
    // }

    // get(path, ...callbacks) {
    //     this.router.get(path, this.applyCallbacks(callbacks))
    // }

    get(path, policies, ...callbacks) {
        this.router.get(path, this.passportCall('jwt'), this.handlePolicies(policies), this.generateCustomResponses, this.applyCallbacks(callbacks))
    }

    post(path, policies, ...callbacks) {
        this.router.post(path, this.handlePolicies(policies), this.generateCustomResponses, this.applyCallbacks(callbacks))
    }

    put(path, policies, ...callbacks) {
        this.router.put(path,  this.passportCall('jwt'), this.handlePolicies(policies), this.generateCustomResponses, this.applyCallbacks(callbacks))
    }

    delete(path, policies, ...callbacks) {
        this.router.delete(path, this.handlePolicies(policies), this.generateCustomResponses, this.applyCallbacks(callbacks))
    }
}


module.exports = ClassRouter