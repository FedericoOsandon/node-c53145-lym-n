export default class ProductRepository {
    constructor(productDao){
        this.productDao = productDao
    }
    getProducts = async () => await this.productDao.getAll() 
    getProduct  = async pid => await this.productDao.getBy({_id: pid}) 

}

