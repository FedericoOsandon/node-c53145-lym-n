import { connect, mongo } from 'mongoose'
import dotenv from 'dotenv' 
import { program } from '../utils/commander.js'
import { MongoSingleton } from '../utils/MongoSingleton.js'

const { mode } = program.opts()

dotenv.config({
    path: mode === 'production' ? './.env.production' : './.env.development'
})


export const objectConfig = {
    port:            process.env.PORT || 8080,
    mongo_url:       process.env.MONGO_URL,
    jwt_private_key: process.env.JWT_PRIVATE_KEY,
    persistence:     process.env.PERSISTENCE,
    gmail_user:      process.env.GMAIL_USER, 
    gmail_pass:      process.env.GMAIL_PASS
}

export const connectDb = async () => {
    // logger.info('base de datos conectada')
    // connect(process.env.MONGO_URL)
    MongoSingleton.getInstance()
}
