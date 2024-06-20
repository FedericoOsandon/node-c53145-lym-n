let users = []
class UserDaoMemory { // manager User
    

    get = async ()=> {
        // return await this.userModel.paginate({ },{limit: 10, page, lean: true})
        return await users
    }

    create = async (user)=> {}
}

module.exports = UserDaoMemory