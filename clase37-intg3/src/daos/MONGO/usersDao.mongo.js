const { usersModel } = require("./models/users.model")

class UserDaoMongo {
    constructor(){
        this.model = usersModel
    }
    getBy  = async filter => await this.model.findOne(filter)
    getAll = async () => await this.model.find({})
    create = async newUser => await this.model.create(newUser)
    update = async (uid, userToUpdate) => this.model.findByIdAndUpdate({_id: uid}, userToUpdate, {new: true})
    delete = async uid => this.model.findByIdAndDelete({_id: uid}, {new: true})
}

module.exports = {
    UserDaoMongo
}