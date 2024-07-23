class Persona {
    // constructor
    constructor(nombre='Lucas', apellido="Hernandez"){
        this.nombre = nombre
        this.apellido = apellido        
    }
    // atributos -> propiedades
    // metodos -> función 

    // constructor(){}
    
    static especie = 'humano'
    saludar = () => {
        logger.info(`${this.nombre} a ${this.apellido} dice: Holaaa`)

    }

    despedirse = () => {

        logger.info(`${this.nombre} ${this.apellido} dice Adeuuu`)
    }
    

}



const personaFede = new Persona('Fede', 'Osandon')
// objeto.variableEstática = 5
const personaJuan = new Persona('Juan', 'Perez' )


// const usuarioFede = new Usuario('Fede')

