class ProductRepositories { // UserServices
    constructor(dao){
        this.dao = dao
    }

    async getProducts(objConfig){
        try {
            objConfig.limit = objConfig.limit &&  parseInt(objConfig.limit)
            objConfig.page  = objConfig.page  && parseInt(objConfig.page)
            objConfig.sort  = objConfig.sort  && parseInt(objConfig.sort)
            // logger.info('objConfig: ',objConfig)
            return await this.dao.get(objConfig)            
        } catch (error) {
            return error
        }
    }

    async getProduct(pid){
        try {
            return await this.dao.getById(pid)
        } catch (error) {
            return error
        }
    }
    
    async createProduct(newProduct){
        try {            
            return await this.dao.create(newProduct)                         
        } catch (error) {
            return error
        }
    }

    async updateUser(pid, updateProduct){
        try {
            return await this.dao.update(pid, updateProduct)
        } catch (error) {
            return error
        }
    } 

    async deleteUser(pid){
        try {
            return await this.dao.remove(pid)
        } catch (error) {
            return error
        }
    }    
}

module.exports = ProductRepositories