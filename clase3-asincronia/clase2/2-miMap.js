let arregloPrueba = [1,2,3,4,5]

function myMap(arreglo, callback) {
    let nuevoArreglo = [];
    for (let i = 0; i < arreglo.length; i++) {
      let nuevoValor = callback(arreglo[i])
      nuevoArreglo.push(callback(nuevoValor));
    }
    return nuevoArreglo;
}

let nuevoArregloPropio = myMap(arregloPrueba, x=> x*2)


Array.prototype.miPropioMap = function(callback){
    var nuevoArreglo = []
    for (let i = 0; i < this.length; i++) {
        let nuevoValor = callback(this[i])
        nuevoArreglo.push(callback(nuevoValor))// ooo
    }
    return nuevoArreglo;
}

let nuevosCalores = arregloPrueba.miPropioMap(x=>x*2)

