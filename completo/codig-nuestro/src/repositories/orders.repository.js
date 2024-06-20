// dto

class OrderService {
    constructor(orderDao){
        this.orderDao = orderDao
    }

    async getOrders(){
        return await this.orderDao.get()
    } 
    async getOrder(oid){
        return await this.orderDao.getById(oid)
    } 
    async ceateOrder(newOrder){
        return await this.orderDao.create(newOrder)
    } 

    
}

module.exports= OrderService