const { 
    UserDao, 
    ProductDao, 
    OrderDao, 
    CartDao 
} = require('../Dao/factory.js') // Daos - Manager

const ProductRepositories = require('./product.repositories.js') // Service
const UserRpositories = require('./user.repositories.js')
const OrderRepositories = require('./ordersService.js')
const CartRepositories = require('./cart.repositories.js')


const userService = new UserRpositories(new UserDao())
const productService = new ProductRepositories(new ProductDao())
const cartService = new CartRepositories(new CartDao())
const orderService = new OrderRepositories(new OrderDao())

module.exports = {
    userService,
    productService,
    cartService,
    orderService
}