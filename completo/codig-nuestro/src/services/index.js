const { 
    UserDao, 
    ProductDao, 
    OrderDao, 
    CartDao 
} = require('../Dao/factory.js') // Daos - Manager

const ProductRepositories = require('../repositories/product.repositories.js') // Service
const UserRpositories = require('../repositories/user.repositories.js')
const OrderRepositories = require('../repositories/orders.repository.js')
const CartRepositories = require('../repositories/cart.repositories.js')


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