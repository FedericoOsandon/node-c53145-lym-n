

// setTimeout( () => {
//     // acciones 
//     logger.info('2 accion')
// })

// setInterval(function(){
//     logger.info('2 accion')
// }, 1000)

let contando = () => {
    let contador = 1
    logger.info('2 acción')
    let timer = setInterval(()=>{
        logger.info(contador++)
        if(contador>5){
            clearInterval(timer)
        }
    }, 1000)
}



logger.info('1 acción')
contando()
logger.info('3 acción')