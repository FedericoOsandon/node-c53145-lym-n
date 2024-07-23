import { connect } from 'mongoose'

export const connectDb = () => {
    logger.info('base de datos conectada')
    connect('mongodb://127.0.0.1:27017/c53145')
    
}

