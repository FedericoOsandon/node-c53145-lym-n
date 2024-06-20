const { usersModel } = require("../models/users.model")

class UserManagerMongo {
    constructor(){
        this.model = usersModel
    }
    getUser = async filter => await this.model.findOne(filter)
    createUser = async newUser => await this.model.create(newUser)
}

module.exports = {
    UserManagerMongo
}