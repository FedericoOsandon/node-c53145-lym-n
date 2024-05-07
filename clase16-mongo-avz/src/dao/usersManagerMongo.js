import { userModel } from "../models/users.models.js"

export class UsersManagerMongo {
    constructor() {
      this.userModel = userModel;
    }

    async getUsers() {
        return await this.userModel.find()
    }
  
    async createUser(user) {
        return await this.userModel.create(user)
    }
  
    async getUserById(id) {
      return this.userModel.findById({ _id: id });
    }
  
    async getUserByEmail(email) {
      return this.users.find((user) => user.email === email);
    }
  
    async getUsers() {
      return this.users;
    }
  }

