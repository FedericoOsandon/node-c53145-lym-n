import {Router} from 'express'
import jwt from 'jsonwebtoken'

export class RouterClass {
    constructor(){
        // instanciando
        this.router = Router()
        this.init()
    }

    // export 
    getRouter() {
        return  this.router
    }

    init(){}

    applyCallbacks(callbacks){
        return callbacks.map(callback => async (...params) => {
            try {
                await callback.apply(this, params)
            } catch (error) {
                console.log(error)
                params[1].status(500).send(error)
            }
        })
    }

    generateCustomResponse(req, res, next ){
        res.sendSuccess = payload => res.send({status: 'success', payload})
        res.sendServerError = error => res.send({status: 'error', error})
        res.sendSessionError = error => res.send({status: 'error', error})
        next()
    }   
    
    handlePolicies = policies => (req, res, next) => {
        if(policies[0] === 'PUBLIC') return next()
            // el ejemplo es con headers -> Bearer aklsfdlasjdfas
        const authHeaders = req.headers.authorization
        if(!authHeaders)  return res.status(401).send({status: 'error', error: 'unauthorized'})
        const token = authHeaders.split(' ')[1]
        let userVerified = jwt.verify(token, 'palabrasecreta')
        if(!policies.includes(userVerified.role.toUpperCase())) return res.status(401).send({status: 'error', error: 'Not permissions'})
        req.user = user
        next()
    }

    // middleware 

    get(path, policies, ...callbacks){
        this.router.get(path, this.handlePolicies(policies) ,this.generateCustomResponse, this.applyCallbacks(callbacks))
    }
    post(path, policies, ...callbacks){
        this.router.post(path, this.handlePolicies(policies) ,this.generateCustomResponse, this.applyCallbacks(callbacks))
    }
    put(path, policies, ...callbacks){
        this.router.put(path, this.handlePolicies(policies) ,this.generateCustomResponse, this.applyCallbacks(callbacks))
    }
    delete(path, policies, ...callbacks){
        this.router.delete(path, this.handlePolicies(policies) ,this.generateCustomResponse, this.applyCallbacks(callbacks))
    }


}

// saludar = (...params)=>{}
// saludar('hola', 'como', 'est')