import {connect} from "mongoose"

export class MongoSingleton {
    static #instance
    constructor(){
        connect('mongodb://127.0.0.1:27017/c53145')
    }

    static getInstance(){
        if(this.#instance){
            logger.info('base de datos ya esta conectada')
            return this.#instance
        }
        this.#instance = new MongoSingleton()
        logger.info('base de datos conectada')
        return this.#instance
    }
}