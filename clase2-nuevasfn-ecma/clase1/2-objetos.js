const impuestos = {
    impuesto1: 234, 
    impuesto2: 341, 
    impuesto3: 4611, 
    impuesto4: 111, 
}
let parKeyValue =  Object.entries(impuestos)

let soloPropiedades = Object.keys(impuestos)
// impuesto1
// impuesto2
// impuesto3
// impuesto4

let soloValores = Object.values(impuestos)

console.log(soloValores.reduce( (sumaTotal, elemontosArray)=> sumaTotal += elemontosArray , 0)  )
// foreach{
    // let sumador = 0
    // 
    
    // }