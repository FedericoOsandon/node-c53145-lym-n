import passport from 'passport'
import GithubStratetegy from 'passport-github2'
import { UsersManagerMongo } from '../dao/usersManagerMongo.js'

const userService = new UsersManagerMongo()

export const initializePassport = () => {
    // middleware -> estrategia -> local -> username(email), password
   passport.use('github', new GithubStratetegy({
    clientID:'<your client id>',
    clientSecret:'<your client secret>',
    callbackURL: 'http://localhost:8080/api/sessions/githubcallback'
   }, async (accesToken, refreshToken, profile, done)=>{
    try {
        logger.info(profile)
        let user  = await userService.getUserBy({email: profile._json.email})
        // no existe el usuario en nuestra base de datos
        if(!user){
            let newUser = {
                first_name: profile._json.name,
                last_name: profile._json.name,
                email: profile._json.email,
                password: ''
            }
            let result = await userService.createUser(newUser) 
            done(null, result)
        }else{
            done(null, user)
        }

    } catch (err) {
        return done(err)
    }
   }) )

    passport.serializeUser((user, done)=>{
        done(null, user._id)
    }) // _id-> session

    passport.deserializeUser(async(id, done)=>{
        try {
            let user = await userService.getUserBy({_id: id})
            done(null, user)
        } catch (error) {
            done(error)
        }
    }) // session -> user
}

