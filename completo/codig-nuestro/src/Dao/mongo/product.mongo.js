const { ProductModel } = require("./models/product.model")



class ProductDaosMongo {
    constructor(){
        this.product = ProductModel        
    }

    async get({limit=10, page=1, category='', sort=1}){       
                        
        return await this.product.paginate(category.length!==0 ? {category: category} : {}, { limit, page, lean: true, sort: {price: sort}})                                
        
    }

    async getById(pid){        
        return await this.product.findById(pid).lean()        
    }


    async create(newProduct){        
        return await this.product.create(newProduct)            // return newProduct
        
    }

    async update(pid, updateProduct){        
        return await this.product.findByIdAndUpdate({_id: pid}, updateProduct, {new: true})        
    }

    async remove(pid){       
        return await this.product.findByIdAndUpdate({ _id: pid }, { isActive: false }, {new: true})        
    }

}

module.exports = ProductDaosMongo
