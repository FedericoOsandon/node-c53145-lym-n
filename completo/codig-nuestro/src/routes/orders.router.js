const Router = require('./router.js')
const { 
    getOrders, 
    getOrder, 
    createOrder, 
    updateOrder, 
    deleteOrder 
} = require('../controllers/orders.controller')

class OrdersRouter extends Router {
    init(){
        this.get('/',        ['PUBLIC'], getOrders)
        this.get('/:oid',    ['PUBLIC'], getOrder)
        this.post('/',       ['PUBLIC'], createOrder)
        this.put('/:oid',    ['PUBLIC'], updateOrder)
        this.delete('/:oid', ['PUBLIC'], deleteOrder)
    }
}

module.exports = new OrdersRouter()