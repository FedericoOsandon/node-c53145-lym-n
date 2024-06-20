const { Schema, model } = require('mongoose')

const orderCollection = 'orders'


// squema para las órdenes de pizza -> ordernes de compra
const orderSchema = new Schema({
    name: String,
    size: {
        type: String,
        enum: ["small","medium","large"],
        default: "medium" 
    },
    price: Number,
    quantity: Number,
    date: Date
})

const orderModel = model(orderCollection, orderSchema)

module.exports = {
    orderModel
}