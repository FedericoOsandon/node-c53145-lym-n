// 1
// const suma = (nummero1,numero2) => {
//     console.log(nummero1, numero2)
//     if (typeof nummero1 !== 'number' || typeof numero2 !== 'number') return null
// }

// 2
// const suma = (nummero1,numero2) => {
    //     console.log(nummero1, numero2)
    //     if(!nummero1 || !numero2) return 0
    //     if (typeof nummero1 !== 'number' || typeof numero2 !== 'number') return null
// }

// 3
// const suma = (nummero1,numero2) => {
//     console.log(nummero1, numero2)
//     if(!nummero1 || !numero2) return 0
//     if (typeof nummero1 !== 'number' || typeof numero2 !== 'number') return null
//     let result = nummero1 + numero2
//     return result
// }

// 4
// const suma = (...numeros) => {
//     if (num.length === 0) {
//         return 0
//     }
//     let validInput = true
//     for(let i=0; i<numeros.length && validInput; i++) {
//         if(typeof numeros[i] !== 'number') {
//             validInput = false
//         }
//     }
//     if(!validInput) {
//         return null
//     }
//     let result = 0
//     for(let i=0; i<numeros.length; i++) {
//         result += numeros[i]
//     }
//     return result
// }

// const sumaRefactorizada = (...numeros) => {
const suma = (...numeros) => {
    if(numeros.length === 0) return 0
    if (!numeros.every(numero => typeof numero === 'number'))  return null

    return numeros.reduce((sumaTotal, numero) => sumaTotal+numero)
}

   




let testPasados = 0
let testTotales = 4

console.log('----------------------------------------------------------------------')
console.log('Test 1: la función debe devolver null si algún parametro no es numérico')

let resultTest1 = suma('2', 2)

if (resultTest1 === null) {
    console.log('Test 1: OK')
    testPasados++
}else console.log(`Test 1 no ha pasado, se recibio ${typeof resultTest1}, pero se se esperaba null`)


console.log('----------------------------------------------------------------------')
console.log('Test 2: la función debe devolver 0 si no se paso ningún parametro')
let resultTest2 = suma()
if (resultTest2 === 0) {
    console.log('Test 2: OK')
    testPasados++
}else console.log(`Test 2 no ha pasado, se recibio ${resultTest2}, pero se se esperaba 0`)

console.log('----------------------------------------------------------------------')
console.log('test 3: la función devbe devolver la suma correctamente.')
let resultTest3 = suma(2,3)
if (resultTest3 === 5) {
    console.log('Test 3 pasado')
    testPasados++   
}else console.log(`Test 3 no ha pasado, se recibio ${resultTest3}, pero se se esperaba 6`)

console.log('----------------------------------------------------------------------')
console.log('test 4, la función debe poder hacer la suma con cualquier cantidad.')
let resultTest4 = suma(1,2,3,4,5)
if (resultTest4 === 15) {
    console.log('Test 4 pasado')
    testPasados++
}else console.log(`Test 4 no ha pasado, se recibio ${resultTest4}, pero se se esperaba 15`)

if(testPasados === testTotales) console.log('Todos los test han pasado correctamente.')
else console.log(`Han pasado ${testPasados} de ${testTotales} test.`)