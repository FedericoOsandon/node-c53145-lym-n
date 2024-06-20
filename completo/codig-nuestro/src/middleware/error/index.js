const EErrors = require("../../utils/errors/enums")

const errorHandler = () => (error, req, res, next) => {
    
    switch (error.code) {
        case EErrors.INVALID_TYPES_ERROR:
            return res.send({status: 'error', error: error.name})            
            break;
        case EErrors.ROUTING_ERROR:
            return res.send({status: 'error', error: error.name})            
            break;
    
        default:
            return res.send({status: 'error', error: 'Unhandled error'})
            break;
    }
    next()
}

module.exports = errorHandler