// primitivos - string number null boolean 
// objetos - objetos array func. 
// variables -> cont - let - var 


const arrayPersonas = [
    {
        id: 1,
        name: "John",
        age: 30
    },
    {
        id: 2,
        name: "Jane",
        age: 20
    },
    {
        id: 3,
        name: "John",
        age: 30
    }
]

let persona = arrayPersonas.find(persona => {
    let test
    test = persona.id === 3
    return test
})
console.log(persona)

// let i  = 0

// function foo() {
//     i=1
//     let j = 2
//     if (true) {
//         console.log(i)
//         console.log(j)
//     }
// }
// foo()

// function foo1() {
//     let i = 0
    
//     if (true) {
//         let i = 1
//         console.log(i)
//     }
//     console.log(i)
// }
// foo1()

// function foo2() {
//     if (true) {
//         let i = 1        
//     }
//     console.log(i)
// }
// foo2()


// const i = 0
// i = 1

// mutabilidad

// const user = 'Fede'
// user = 'Juan'

// const user = {name: 'Fede'}
// user.name = 'Juan'

// console.log(user)


//funciones _______________________________________________________________

/* The code you provided defines two functions: `nombreDeLaFuncion` and `sumarDosNumeros`. */

// function nombreDeLaFuncion (params){
//     // en el cuarpo de la función están las instrucciones que queremos que realice
//     let saludo = 'Hola como están'
//     // mandamos para afuera la varible porque el valor muere. 
//     return saludo
// }

// function sumarDosNumeros (numero1, numero2) {
//     let resultado
//     return resultado
// }



// const identificadorDeLaFuncion = (params) => {
//     return'Hola como están'+ params
// }
// const sumarDosNumeros = (numero1, numero2) => {
//     return numero1 + numero2
// }

// sumarDosNumeros(1,2)


// Scope
// function nombreDeLaFuncion (params){
//     // en el cuarpo de la función están las instrucciones que queremos que realice
//     let saludo = 'Hola como están'
//     // mandamos para afuera la varible porque el valor muere. 
//     return saludo
// }

// console.log(saludo)

// template String

`Esto es una cadena de caracteres String `











