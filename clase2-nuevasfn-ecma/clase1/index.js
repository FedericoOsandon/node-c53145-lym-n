
// ___________________________________________________________________________________________

// ___________________________________________________________________________________________
    

// ejemplo en clase 

// const objetos =  [
// 	{
// 		manzanas:3,
// 		peras:2,
// 		carne:1,
// 		jugos:5,
// 		dulces:2
// 	},
// 	{
// 		manzanas:1,
// 		sandias:1,
// 		huevos:6,
// 		jugos:1,
// 		panes:4
// 	}
// ]

// const newArray = [manzanas,
//     peras,
//     carne,
//     jugos,
//     dulces,
//     sandias,
//     huevos,
//     panes]

// const newArray  = []

// objetos.forEach( objeto => {
//     let propiedades = Object.keys(objeto)
//     logger.info(propiedades)

// })
// Emiliano

const objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
]

// manzanas
// peras
// carne
// jugos
// dulces

let productos = []
let totalProductos = 0

for (const obj of objetos) {
    let arrayPropiedades = Object.keys(obj)

    for (const producto of arrayPropiedades) {
        if (!productos.includes(producto)) {
            productos.push(producto)
        }
        totalProductos += obj[producto]
    }
}

logger.info(productos)
