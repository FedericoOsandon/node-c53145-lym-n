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
            logger.info(error)
        }
    }

    getProduct = async ( req, res ) => {
        try {
            const {pid} = req.params
            logger.info('pid',pid)
            const product = await this.service.getProduct(pid)
            logger.info('product: ', product)
            res.send({status: 'success', payload: product})
            
        } catch (error) {
            logger.info(error)
        }
    }
    // createProduct
    // updateProduct
    // deleteProduct

}