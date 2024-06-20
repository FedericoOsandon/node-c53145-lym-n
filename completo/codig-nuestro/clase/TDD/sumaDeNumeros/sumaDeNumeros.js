const suma = (...numeros) => {
    if(numeros.length === 0) return 0
    if (!numeros.every(numero => typeof numero === 'number'))  return null

    return numeros.reduce((sumaTotal, numero) => sumaTotal+numero)
}

module.exports = suma

   