import UserDto from "../dtos/users.dto.js"

export default class UserRepository {
    constructor(userDao){
        this.userDao = userDao
    }

    getUsers   = async () => await this.userDao.getAll()
    getUser    = async filter => await this.userDao.getBy(filter)
    createUser = async (user) => {
        const newUser = new UserDto (user)
        return await this.userDao.create(newUser)        
    }
    updateUser = async ( uid, userToUpdate ) => await this.userDao.update(uid, userToUpdate)
    deleteUser = async uid => await this.userDao.delete(uid)

}