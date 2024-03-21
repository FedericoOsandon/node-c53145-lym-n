const moment = require('moment')


const hoy = moment()
console.log(hoy) 
const fechaNacimiento = moment('1996-07-13', 'YYYY-MM-DD')
console.log(fechaNacimiento) 

if(fechaNacimiento.isValid()){
    console.log(`Desde mi nacimiento han pasado ${hoy.diff(fechaNacimiento, 'years')} años`)
}else{
    console.log('la fecha no es valida')
}



//  4  40   5
// cambio mayores   - cambios menores - parches