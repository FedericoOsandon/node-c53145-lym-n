import { cartsModel } from "./models/carts.model.js"

class CartDaoMongo {
    constructor(){
        this.model = cartsModel
    }

    getCarts   = async () => await this.model.find()
    // filter = {_id: cid}
    getCartBy  = async (filter) => await this.model.findOne(filter)

    createCart = async () => await this.model.create({ products: [] })

    updateCart = async (cid, pid) => {
        // Si existe el producto pid, lo incrementa en uno
        const result = await this.model.findOneAndUpdate(
            { _id: cid, 'products.product': pid },
            { $inc: { 'products.$.quantity': 1 }},
            { new: true }            
        )
        if(result) return result

        const newProductInCart = await this.model.findOneAndUpdate(
            { _id: cid },
            { $push: { products: { product: pid, quantity: 1 }}},
            { new: true }
        )
        return newProductInCart
    }

    deleteProduct = async (cid, pid) => await this.model.findOneAndUpdate(
        { _id: cid},
        { $pull: { products: { product: pid}} },
        { new: true }
    )

    deleteCart = async (cid) => this.model.findOneAndUpdate(
        { _id: cid },
        { $set: { products: [] }},
        { new: true }
    )
}

export default CartDaoMongo