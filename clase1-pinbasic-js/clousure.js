
// Un "closure" (o clausura en español) es un concepto en programación que se refiere a la combinación de una función y 
// el entorno léxico en el cual esa función fue declarada. 
// En otras palabras, un closure permite que una función acceda a variables externas, 
// incluso después de que la función haya terminado de ejecutarse.


function crearContador() {
    let contador = 0;
  
    return () =>  {
      contador++;
      logger.info(contador);
    }
  
   
  }
  
  // Crear una instancia de la función crearContador
  let miContador = crearContador();
  
  // Llamar a la función devuelta (incrementar), que tiene acceso a la variable 'contador'
  miContador(); // Imprime 1
  miContador(); // Imprime 2
  miContador(); // Imprime 3