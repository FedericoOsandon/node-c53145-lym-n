const { cartModel } = require("./models/cart.model.js")

class CartDaoMongo{    
    constructor(){
        this.Cart = cartModel
    }

    get = async () =>  await this.Cart.find()

    getBy = async (cid) => {                 
        const res = await this.Cart.findOne({_id: cid}).lean()
        // logger.info('cart mongo: ',JSON.stringify(res.products, null, 2))
        return res      
    }

    create = async (userEmail) => await this.Cart.create({ userEmail, products: [] })       

    update = async (cid, product) => {           
        // si existe el producto en el carrito, se actualiza la cantidad
        const updatedCart = await this.Cart.findOneAndUpdate(
            { _id: cid, 'products.product': product.id },
            { $inc: { 'products.$.quantity': product.quantity } },
            { new: true }
        )
        // El producto ya estaba en el carrito, se actualizó su cantidad
        if (updatedCart) return updatedCart

        // El producto no estaba en el carrito, se agrega con quantity en 1
        const newProductInCart = await this.Cart.findOneAndUpdate(
            { _id: cid },
            { $push: { products: { product: product.id, quantity: product.quantity } } },
            { new: true, upsert: true }
        )
        
        return newProductInCart
    }

    // Delete api/carts/:cid/products/:pid
    deleteItem = async (cid, pid) => await this.Cart.findOneAndUpdate(
                { _id: cid },
                { $pull: { products: { product: pid } } },
                { new: true }
            )
    

    // vaciar carrito
    delete = async (cid) =>   await this.Cart.findOneAndUpdate(
                { _id: cid },
                { $set: { products: [] } },
                { new: true }
            )
      

}

module.exports = CartDaoMongo

