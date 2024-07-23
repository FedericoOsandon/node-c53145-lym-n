// const task = new Promise( ( res, rej )=>{ // o res, rej - resulto o rechazado
//     // acciones
//     res( 'Todo bien' )
//     // rej('todo mal')
// })

// task // pendiente, cumplido, rechazado   
//     .then(respuestaRes => {
//         // throw new Error('simulacion ')
//         logger.info( respuestaRes)
//         //f  fetch
//     })
//     .catch(err => logger.info(err))

// lo de arriba no va

const dividir = (dividendo, divisor)=> {
    return new Promise( ( res, rej )=>{ // o res, rej - resulto o rechazado
        
            if(divisor === 0){
                rej( {msg: 'no puedo dividir por 0'} )
    
            }else{
                res( dividendo/divisor )
            }
        
    })
}

const dividirASyncAwait = async (dividendo, divisor)=> {       
    if(divisor === 0){
        return await {msg: 'no puedo dividir por 0'}     
    }    
    return  await dividendo/divisor     
}


// encadenamiento 
// dividir(2, 2) 
//     .then(respuestaResolve => {        
//         return respuestaResolve * 3        
//     })
//     .then(resultado => resultado + 3 )
//     .then(resultado2 => logger.info(resultado2))
//     .catch(err => logger.info(err.msg))

async function empezarDividir () {
    try {
        let resultado = await dividir(2, 2) 
        logger.info(resultado * 1 + 3 )
        
    } catch (error) {
        logger.info(error)
    } 
}  
empezarDividir()

// function funcA(){
//     logger.info("1")
//     funcB() // pausado hasta que funcB termine
//     logger.info("2")
// }

// function funcB(){
//     logger.info("3")
//     funcC()
//     logger.info("4")
// }

// function funcC(){
//     logger.info("5")
// }

// funcA()

// ejemplo 