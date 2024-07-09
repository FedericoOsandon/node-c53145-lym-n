import {Schema, model} from 'mongoose'

const CartSchema = new Schema({
    // userId: String - o 
    // userEmail: String 
    products: {
        type: [{
            product: {
                type: Schema.Types.ObjectId,
                ref: 'products'
            },
            quantity: Number
        }]
    }
})


CartSchema.pre('findOne', function() {
    this.populate('products.product')
})

export const cartsModel = model('carts', CartSchema)