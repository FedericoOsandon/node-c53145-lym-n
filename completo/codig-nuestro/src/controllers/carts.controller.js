const { cartService } = require("../services")


class CartsController {
    getCarts =  async (req, res) => {
        try {
            const carts = await cartService.getCarts()
            console.log(carts)
            res.status(200).json({
                status: 'success',
                payload: carts
            })        
        } catch (error) {
            console.log(error)
        }
    }

    getCart = async (req, res) => {
        try {
            const { cid } = req.params
            const cart = await cartService.getCart(cid)
            // console.log('cart de controllers',cart)
            if (!cart) {
                return res.status(401).render({
                    status: 'error',
                    message: 'Cart not found'
                })
                
            }
            res.status(200).json({
                cart
            })            
        } catch (error) {
            console.log(error)
        }
    }

    createCart = async (req, res) => {
        try {
            const resp = await cartService.createCart()
            if (!resp) {
                return res.status(404).json(resp)
            }        
            res.status(200).json(resp) 
        } catch (error) {
            console.log(err)
        }
        // const carrito = req.body
    }

    addProductToCart = async (req, res) => {
        try {
            const { cid, pid } = req.params
            const { quantity } = req.body
            const product = { id: pid, quantity }
            // console.log('cart controller: ',product)
            // console.log('cart controller cid: ',cid)
            // console.log('cart controller pid: ',pid)
            const resp = await cartService.addProductToCart(cid, product)
            if (!resp) return res.status(404).json({status: 'error', message: 'Cart not found'})
            res.status(200).json({
                status: 'success', 
                message: 'Product added to cart'
            })        
        } catch (error) {
            console.log(error)
        }
    }

    deleteProductFromCart  = async (req, res) => {
        try {
            const { cid, pid } = req.params
            const resp = await cartService.deleteProductFromCart(cid, pid)
            if (!resp) return cartService.status(404).json({status: 'error', message: 'Cart not found'})
            res.status(200).json({
                status: 'success',
                message: 'Product deleted from cart'
            })        
        } catch (error) {
            console.log(error)
        }
    }

    deleteCart = async (req, res) => {
        try {
            const { cid } = req.params
            const resp = await cartService.deleteCart(cid) 
            if (!resp) return res.status(404).json({status: 'error', message: 'Cart not found'})
            res.status(200).json(resp)
        } catch (error) {
            console.log(error)
        }
    }

    checkoutCart = async (req, res) => {
        const {cid} = req.params
        console.log(cid)
        res.json({
            status: 'success',
            message: 'Purchase completed successfully',
        })
    }
    

    
}

module.exports = new CartsController()