import { productModel } from "./models/products.model.js"

class ProductDaosMongo {
    constructor(){
        this.product = productModel        
    }

    getAll = async () => {                        
        return await this.product.find({})         
    }
    
    // async get({limit=10, page=1, category='', sort=1}){       
                        
    //     return await this.product.paginate(category.length!==0 ? {category: category} : {}, { limit, page, lean: true, sort: {price: sort}})                                
        
    // }

    getBy = async filter => {        
        return await this.product.findOne(filter)     
    }


    async create(newProduct){        
        return await this.product.create(newProduct)            
        
    }

    async update(pid, updateProduct){        
        return await this.product.findByIdAndUpdate({_id: pid}, updateProduct, {new: true})        
    }

    async delete(pid){       
        return await this.product.findByIdAndUpdate({ _id: pid }, { isActive: false }, {new: true})        
    }

}

export default ProductDaosMongo
