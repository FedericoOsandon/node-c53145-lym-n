const {Schema, model} = require('mongoose')

const orderCollection = 'orders'

const orderSchema = new Schema({  
    user: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'productos'
    }],
    totalprice: Number,
    created: Date
    

})

const OrderModel = model(orderCollection, orderSchema)

module.exports = {
    OrderModel
}