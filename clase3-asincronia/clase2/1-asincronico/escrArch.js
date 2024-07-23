module.exports = function escribirArchivo(texto, callback) {
    logger.info(texto)
    setTimeout(()=>{
        callback()
    },0)
}