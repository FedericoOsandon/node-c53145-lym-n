class CartService {

    constructor(cartDao){
        this.cartDao = cartDao
    }

    async getCarts(){
        try {
            let res = await this.cartDao.get()
            console.log(res)
            return res
        } catch (error) {
            return new Error(error)
        }
    } 

    async getCart(cid){
        try {
            return await this.cartDao.getBy(cid)           
        } catch (error) {
            return new Error(error)
        }
    } 

    async createCart(userEmail){
        try {
            return await this.cartDao.create(userEmail)            
        } catch (error) {
            return new Error(error)
        }
    } 

    async addProductToCart(cid, product){
        try {
            return await this.cartDao.update(cid, product)
        } catch (error) {
            return new Error(error)
        }
    }

    async deleteProductFromCart(cid, pid){
        try {
            return await this.cartDao.deleteItem(cid, pid)
        } catch (error) {
            return new Error(error)
        }
    }

    async deleteCart(cid){
        try {
            return await this.cartDao.delete(cid)
        } catch (error) {
            return new Error(error)
        }
    }
   


} 

module.exports = CartService