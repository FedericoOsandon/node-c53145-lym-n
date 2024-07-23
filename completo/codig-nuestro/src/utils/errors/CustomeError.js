class CustomError {
    static createError({name='Error', cause, message, code=1}) {
        // logger.info(cause)  
           
        let error = new Error(message)
        error.cause = cause  
        error.name = name
        error.code = code
        // logger.info(error)
        throw error
    }
}

module.exports = CustomError 