import { connectDb, objectConfig } from "../config/index.js";

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
        connectDb()
        const { default: ProductDaoMongo } = await import("./MONGO/productDao.mongo.js")
        const { default: CartDaoMongo } = await import("./MONGO/cartsDao.mongo.js")
        const { default: UsersDaoMongo } = await import("./MONGO/usersDao.mongo.js")

        ProductsDao = ProductDaoMongo
        CartsDao = CartDaoMongo
        UsersDao = UsersDaoMongo 
        break;
}