
const mostrarLista = (elementos=[]) =>{
    if(elementos.length===0) return "Lista vacía";
    elementos.forEach(elemento=>logger.info(elemento));
    return elementos.length;
}
//Prueba fallida
let resultado1 = mostrarLista();
logger.info(resultado1); // Lista vacía

//Prueba válida
let resultado2 = mostrarLista([1,2,3,4])
logger.info(resultado2)