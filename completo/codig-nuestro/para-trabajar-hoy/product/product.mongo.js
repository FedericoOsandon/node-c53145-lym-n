const { ProductModel } = require("./models/product.model")



class ProductDaosMongo {
    constructor(){
        this.product = ProductModel        
    }

    async get({limit=10, page=1, category='', sort=1}){        
         try {                 
            return await this.product.paginate(category.length!==0 ? {category: category} : {}, { limit, page, lean: true, sort: {price: sort}})                                 
        } catch (err) {
            return new Error(err)
        }
    }

    async getById(pid){
        try {
            // buscar un producto por id en mongo
            return await this.product.findById(pid)
        } catch (err) {
            return new Error(err)
        }
    }


    async create(newProduct){
        try {
            return await this.product.create(newProduct)
            // return newProduct
        } catch (err) {
            return new Error(err)
        }
    }

    async update(pid, updateProduct){
        try {
            return await this.product.findByIdAndUpdate({_id: pid}, updateProduct, {new: true})
        } catch (err) {
            return new Error(err)
        }
    }

    async remove(pid){
        try {
            return await this.product.findByIdAndUpdate({ _id: pid }, { isActive: false }, {new: true})
        } catch (err) {
            return new Error(err)
        }
    }

}

module.exports = ProductDaosMongo
