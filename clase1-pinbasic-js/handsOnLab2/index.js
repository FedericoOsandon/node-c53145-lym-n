class Contador {
    constructor(responsable){
        this.responsable=responsable;
        this.conteo=0;
    }
    static contadorGlobal = 0;
    getResponsable = () =>{
        
        return this.responsable;
    }
    contar = () =>{
        this.conteo++;
        Contador.contadorGlobal++;
    }
    getCuentaIndividual = () =>{
        return this.conteo;
    }
    getCuentaGlobal = () =>{
        return Contador.contadorGlobal;
    }
}

//Pruebas
const contador1 = new Contador('Mauricio');
contador1.contar();
contador1.contar();
const contador2 = new Contador('Julia');
logger.info(contador1.getCuentaIndividual())
logger.info(contador2.getCuentaGlobal())

