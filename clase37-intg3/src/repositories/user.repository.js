const { ClassRepository } = require("./classRepository")

class UserRepository extends ClassRepository{
    constructor(dao){
        super(dao)
    }
}

module.exports = {
    UserRepository
}