const moment = require('moment')


const hoy = moment()
logger.info(hoy) 
const fechaNacimiento = moment('1996-07-13', 'YYYY-MM-DD')
logger.info(fechaNacimiento) 

if(fechaNacimiento.isValid()){
    logger.info(`Desde mi nacimiento han pasado ${hoy.diff(fechaNacimiento, 'years')} años`)
}else{
    logger.info('la fecha no es valida')
}



//  4  40   5
// cambio mayores   - cambios menores - parches