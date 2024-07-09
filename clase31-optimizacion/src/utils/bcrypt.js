import bcrypt from 'bcrypt'

export const crateHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10))
// contraseña -> *698854631asdfasdf!jfaslfdsa
//password ingresamos en el login - user el de la base de datos
export const isValidPAssword = (password, user) => bcrypt.compareSync(password, user.password)

