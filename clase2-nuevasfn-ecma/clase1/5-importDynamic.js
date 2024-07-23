
// importación dinámica
const modo = 'cálculos'

const ejemploImport = async () => {
    if (modo === 'cálculos') {
        const { Calculadora } = await import('./calculadora.js')
        let calculadora = new Calculadora()
        logger.info(calculadora.resta(1,2))        
    }
}
ejemploImport()