const operacion = (numero1, numero2, cb )=> {

    /// acciones 
    logger.info(numero1)
    logger.info(numero2)

    return cb(false, numero1, numero2)
}

const suma = (err,num1, num2)=> num1+num2 
const resta = (err, num1, num2)=> num1 - num2 
const mult = (err, num1, num2)=> num1 * num2 
const div = (err, num1, num2)=> err === null ? num1 / num2 : 'no se puede dividir por 0' 

// ej

// logger.info(operacion( 1,2, suma ))
// logger.info(operacion( 1,2, resta ))
// logger.info(operacion( 1,2, mult ))
logger.info(operacion( 1,0, div ))