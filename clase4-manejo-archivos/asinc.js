

// setTimeout( () => {
//     // acciones 
//     console.log('2 accion')
// })

// setInterval(function(){
//     console.log('2 accion')
// }, 1000)

let contando = () => {
    let contador = 1
    console.log('2 acción')
    let timer = setInterval(()=>{
        console.log(contador++)
        if(contador>5){
            clearInterval(timer)
        }
    }, 1000)
}



console.log('1 acción')
contando()
console.log('3 acción')