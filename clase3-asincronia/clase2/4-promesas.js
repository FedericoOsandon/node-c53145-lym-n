// const task = new Promise( ( res, rej )=>{ // o res, rej - resulto o rechazado
//     // acciones
//     res( 'Todo bien' )
//     // rej('todo mal')
// })

// task // pendiente, cumplido, rechazado   
//     .then(respuestaRes => {
//         // throw new Error('simulacion ')
//         console.log( respuestaRes)
//         //f  fetch
//     })
//     .catch(err => console.log(err))

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
//     .then(resultado2 => console.log(resultado2))
//     .catch(err => console.log(err.msg))

async function empezarDividir () {
    try {
        let resultado = await dividir(2, 2) 
        console.log(resultado * 1 + 3 )
        
    } catch (error) {
        console.log(error)
    } 
}  
empezarDividir()

// function funcA(){
//     console.log("1")
//     funcB() // pausado hasta que funcB termine
//     console.log("2")
// }

// function funcB(){
//     console.log("3")
//     funcC()
//     console.log("4")
// }

// function funcC(){
//     console.log("5")
// }

// funcA()

// ejemplo 