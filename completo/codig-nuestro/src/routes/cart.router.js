const Router = require('./router.js')
const { 
    getCarts, 
    getCart, 
    createCart, 
    addProductToCart, 
    deleteProductFromCart, 
    deleteCart, 
    checkoutCart 
} = require('../controllers/carts.controller.js')

class CartsRouter extends Router {
    init(){
        this.get('/',                     ['PUBLIC'], getCarts )
        this.get('/:cid',                 ['USER'],   getCart )
        this.post('/',                    ['PUBLIC'], createCart )
        this.put('/:cid/product/:pid',    ['USER'],   addProductToCart )
        this.delete('/:cid/product/:pid', ['PUBLIC'], deleteProductFromCart )
        this.delete('/:cid',              ['PUBLIC'], deleteCart )
        this.post('/:cid/purchase',       ['PUBLIC'], checkoutCart )
    }
}

module.exports = new CartsRouter()