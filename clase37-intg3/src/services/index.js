const { UserDaoMongo } = require("../daos/MONGO/usersDao.mongo");
const { UserRepository } = require("../repositories/user.repository");


const userService = new UserRepository(new UserDaoMongo())

module.exports = {
    userService
}