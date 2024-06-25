import { UsersDao, ProductsDao, CartsDao } from "../daos/factory.js"
import UserRepository from "../repositories/user.repository.js"



export const userService = new UserRepository(new UsersDao())
// export const productService = 
