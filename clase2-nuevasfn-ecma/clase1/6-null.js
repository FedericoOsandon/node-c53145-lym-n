


/// 

let variablePrueba = false

let prueba1 = variablePrueba || 'sin Valor'
let prueba2 = variablePrueba??"sin valor"
console.log(prueba1)
console.log(prueba2)


// propiedades privadada
class Persona {
    #name
    constructor(name, age) {
        this.name = name
        this.age = age
        this.fullname = `${this.#name} ${age}`

    }

    getName() {
        return this.#name
    }

    getFullName() {
        return this.fullname
    }

    #metodoPrivado = () =>  `Solo accesible para la clase`
}

const persona = new Persona('John', 30)

console.log(persona.getName())

