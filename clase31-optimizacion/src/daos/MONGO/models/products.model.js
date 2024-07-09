import { Schema, model }  from "mongoose"

const productsCollection = 'products'

const productSchema = new Schema({
    title: {
        type: String,
        index: true
    },
    price: Number,
    stock: Number,
    category: {
        type: String     
    }
})
// odm 
export const productModel = model(productsCollection, productSchema)
