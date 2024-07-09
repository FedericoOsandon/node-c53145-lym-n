export const generateUserError = (user) => {
    return `Hay una de las propiedades del usuario incompleta o no valido.
    listado de propiedades requeridos: 
    * first_name: necesita ser un string, pero se recibio ${user.first_name}
    * last_name: necesita ser un string, pero se recibio ${user.last_name}
    * email: necesita ser un string, pero se recibio ${user.email}
    `
}