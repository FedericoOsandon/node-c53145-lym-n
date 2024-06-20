const {config: {persistence, dbConnection}} = require('../config/config.js')

let ProductDao
let UserDao
let CartDao
let OrderDao

switch ('MONGO') {
    case 'MONGO':

        dbConnection() // 2 llamada a la conexión
        const ProductDaoMongo = require('./mongo/product.mongo.js')
        ProductDao = ProductDaoMongo

        const UserDaoMongo = require('./mongo/user.mongo.js')
        UserDao = UserDaoMongo

        const OrderDaoMongo = require('./mongo/oders.mongo.js')
        OrderDao = OrderDaoMongo

        const CartDaoMongo = require('./mongo/cart.mongo.js')
        CartDao = CartDaoMongo
        
        break
    case 'MEMORY':
        const UserDaoMemory = require('./memory/user.memory.js')
        UserDao = UserDaoMemory
        break;
    case 'ARCHIVO':
        
        break;

    default:
        break;
}

module.exports = {
    ProductDao,
    UserDao,
    CartDao,
    OrderDao
}