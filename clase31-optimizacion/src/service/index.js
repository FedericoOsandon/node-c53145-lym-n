import ProductRepository from "../repositories/product.repository.js"
import UserRepository from "../repositories/user.repository.js"

import { 
    UsersDao, 
    ProductsDao, 
    CartsDao 
} from "../daos/factory.js"



export const userService    = new UserRepository(new UsersDao())
export const productService = new ProductRepository(new ProductsDao())
// export const productService = 
