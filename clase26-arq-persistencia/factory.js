import { objectConfig } from "../config/index.js";

// import cart fs, product fs 

export let ProductsDao
export let CartsDao
export let UsersDao

switch (objectConfig.persistence) {
    case "MEMORY":
        
        break;
    case "FS":
        const { default: ProductDaoFS } = await import('./FS/productsManagerFS.js')
        ProductsDao = ProductDaoFS
        break;

    default:
        // MONGO
        const { default: ProductDaoMongo } = await import("./MONGO/productDao.mongo.js")
        const { default: CartDaoMongo } = await import("./MONGO/cartsDao.mongo.js")
        const { default: UserDaoMongo } = await import("./MONGO/userDao.mongo.js")

        ProductsDao = ProductDaoMongo
        CartsDao = CartDaoMongo
        UsersDao = UserDaoMongo 
        break;
}