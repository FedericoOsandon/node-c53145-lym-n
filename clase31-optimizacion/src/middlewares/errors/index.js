import { EError } from "../../service/errors/enums.js";


export const handleErrors = () => ( error, req, res, next ) => {
    console.log('error cause: ',error.cause)
    switch (error.code) {
        case EError.INVALID_TYPES_ERROR: 
            return res.send({status: 'error', error: error.name})
            break
        case EError.DATABASE_ERROR: 
            return res.send({status: 'error', error: error.name})
            break
        default:
            return res.send({status: 'error', error: 'error no identificado'})

    }
}