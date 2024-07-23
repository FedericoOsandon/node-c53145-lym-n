function login(user, password) {
    const hardcodedUser = 'coderUser';
    const hardcodedPassword = '123';

    if (password === '') {
        logger.info('No se ha proporcionado un password');
    } 
    if (user === '') {
        logger.info('No se ha proporcionado un usuario');
    } 
    if (user !== hardcodedUser) {
        logger.info('Credenciales incorrectas');
    }
    if (password !== hardcodedPassword) {
        logger.info('Contraseña incorrecta');
    } 
  
    logger.info('logueado');
  
}


console.assert(login('', '') === 'No se ha proporcionado un usuario', 'Error en caso de usuario vacío');
console.assert(login('coderUser', '') === 'No se ha proporcionado un password', 'Error en caso de password vacío');
console.assert(login('incorrectUser', '123') === 'Credenciales incorrectas', 'Error en caso de usuario incorrecto');
console.assert(login('coderUser', 'incorrectPassword') === 'Contraseña incorrecta', 'Error en caso de password incorrecto');
console.assert(login('coderUser', '123') === 'logueado', 'Error en caso de credenciales correctas');

