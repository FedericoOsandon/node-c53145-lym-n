const array = [1,2,3,4,5,6]


let newArray = array.map(x => x*2)

logger.info(newArray)


// const funcionCallback = (num) => { 
//     if (num % 2 === 0) {
//         return num
//     } else {
//         return 'no es par'        
//     }
// }

function callback (num) { 
    if (num % funcionCallback === 0) {
        return num
    } else {
        return 'no es par'        
    }
}

const newArray2 = array.map( callback )

logger.info(newArray)


///___________________________________________________________________________