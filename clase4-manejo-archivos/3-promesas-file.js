const fs = require('fs')
// const { promises: fs, readFile } = require('fs')

// fs.promises.writeFile()
// fs.writeFile('./data.txt', 'contenido', 'utf-8')
// .then(()=> logger.info('archivos escrito'))
// .then(()=> logger.info('archivos escrito'))
// .then(()=> logger.info('archivos escrito'))
// .catch(error => logger.info(error))

// const writeFileFunction = async () => { 
//     try {
//         // await fs.promises.writeFile('./data.txt', 'contenido', 'utf-8')
//         await fs.promises.appendFile('./data.txt', '\nagregado contenido', 'utf-8')

//         const contenido = await fs.promises.readFile('./data.txt', 'utf-8')

//         await fs.promises.unlink('./asinc-cb.txt')

//         logger.info(contenido)
        
//     } catch (error) {
//         logger.info(error.message)
//     }
// }
const writeFileFunction = async () => { 
    try {
        // const objArray = [{
        //     title: 'producto example',
        //     price: 1500,
        //     category: 'gorras'
        // }]

        // await fs.promises.appendFile('./data.txt', '\nagregado contenido', 'utf-8')
        
        const contenido = await fs.promises.readFile('./package.json', 'utf-8')
        const contenidoParseado = JSON.parse(contenido)
        contenidoParseado.nombreDelMejor = 'Fede'
        contenidoParseado.version = '1.0.1'

        // const {nombreDelMejor, ...resto} = obj
        
        
        logger.info(contenidoParseado)
        await fs.promises.writeFile('./package.json', JSON.stringify(contenidoParseado, null, '\t'), 'utf-8')
        
    } catch (error) {
        logger.info(error.message)
    }
}

writeFileFunction()

