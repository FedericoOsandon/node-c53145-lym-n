const Router = require('./router.js')
const { 
    getProdutcs, 
    getProdutc, 
    createProdutcs, 
    updateProduct, 
    deleteProduct 
} = require('../controllers/products.controller.js')

class ProductsRouter extends Router {
    init(){
        this.get('/',       ['PUBLIC'], getProdutcs)
        this.get('/:id',    ['PUBLIC'], getProdutc)
        this.post('/',      ['PUBLIC'], createProdutcs)
        this.put('/:id',    ['PUBLIC'], updateProduct) 
        this.delete('/:id', ['PUBLIC'], deleteProduct)
    }
}

module.exports = new ProductsRouter()
