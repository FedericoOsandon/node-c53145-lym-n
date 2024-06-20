const { ordersModel } = require("./models/orders.model")


class OrderDaoMongo {
    constructor(){
        this.ordersModel = ordersModel
    }

    async get(){
        try {
            return await this.ordersModel.find({})
        } catch (error) {
            return new Error(error)
        }
    }
    async getById(oid){
        try {
            return await this.ordersModel.findById(oid)
        } catch (error) {
            new Error(error)
        }
        
    }
    async create(newOrder){
        try {
            // const order = this.ordersModel(newOrder)
            // order.save
            return await this.ordersModel.create(newOrder)            
        } catch (error) {
            new Error(error)
        }
    }
    async update(){}
    async delete(){}
}

module.exports = OrderDaoMongo