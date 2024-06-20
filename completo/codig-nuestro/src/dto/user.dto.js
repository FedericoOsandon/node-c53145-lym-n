class UserDTO {
    constructor(newUser){
        this.first_name = newUser.nombre
        this.last_name  = newUser.apellido
        this.full_name  = `${newUser.nombre} ${newUser.apellido}`
        this.email      = newUser.email
        this.password   = `${newUser.nombre}123`

        // this.active  = true
        // this.phone   = newUser.phone ? newUser.phone.split('-').join('') : '' 
    }
}

module.exports = UserDTO