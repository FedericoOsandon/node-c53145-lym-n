const { userModel } = require("./models/user.model")


class UserDaoMongo { // manager User
    constructor() {
        this.userModel = userModel
    }

    get = async (limit, page)=> {                   
            return await this.userModel.paginate({ },{limit, page, lean: true})              
    }
    getBy = async (email) => {                 
        return await this.userModel.findOne({email})
    }

    create = async (newUser)=> {
        try {
            return await this.userModel.create(newUser)
            // return newUser
        } catch (error) {
            return new Error(error)
        }
    }
}

module.exports = UserDaoMongo