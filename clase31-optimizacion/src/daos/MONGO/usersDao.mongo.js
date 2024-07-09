import { userModel } from "./models/users.models.js"

export default class UsersDaoMongo {
    constructor(model) {
      this.userModel = userModel;
    }

    // async getUsers({limit = 10, numPage=1}) {
    async getAll() {
        return await this.userModel.find()
        // return await this.userModel.paginate({}, {limit, page: numPage, sort: {price: -1}, lean: true })
    }
  
    async create(newUser) {
        return await this.userModel.create(newUser)
    }
  
    async getBy(filter) {
      return this.userModel.findOne(filter);
    }

    update = async (uid, userToUpdate) => await this.userModel.findByIdAndUpdate({_id: uid}, userToUpdate)
  
    
  }

