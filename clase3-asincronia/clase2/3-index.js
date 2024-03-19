const operacion = (numero1, numero2, cb )=> {

    /// acciones 
    console.log(numero1)
    console.log(numero2)

    return cb(false, numero1, numero2)
}

const suma = (err,num1, num2)=> num1+num2 
const resta = (err, num1, num2)=> num1 - num2 
const mult = (err, num1, num2)=> num1 * num2 
const div = (err, num1, num2)=> err === null ? num1 / num2 : 'no se puede dividir por 0' 

// ej

// console.log(operacion( 1,2, suma ))
// console.log(operacion( 1,2, resta ))
// console.log(operacion( 1,2, mult ))
console.log(operacion( 1,0, div ))