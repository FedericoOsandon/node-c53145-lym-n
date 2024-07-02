import { productService } from "../service/index.js"

export default class ProductController {
    constructor(){
        this.service = productService
    }

    getProducts = async ( req, res ) => {
        try {
            const products = await this.service.getProducts()
            
            res.send({status: 'success', payload: products})
        } catch (error) {
            console.log(error)
        }
    }

    getProduct = async ( req, res ) => {
        try {
            const {pid} = req.params
            console.log('pid',pid)
            const product = await this.service.getProduct(pid)
            console.log('product: ', product)
            res.send({status: 'success', payload: product})
            
        } catch (error) {
            console.log(error)
        }
    }
    // createProduct
    // updateProduct
    // deleteProduct

}