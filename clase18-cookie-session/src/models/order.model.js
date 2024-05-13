import { Schema, model } from 'mongoose'

const OrderSchmea = new Schema({
    name: String,
    size: {
        type: String,
        enum: ["small", "medium", "large"],
        default: "medium"
    },
    price: Number,
    quantity: Number,
    date: Date
})

export const orderModel = model('orders', OrderSchmea)