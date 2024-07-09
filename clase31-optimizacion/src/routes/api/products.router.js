import { Router } from 'express'
import ProductController from '../../controllers/products.controller.js'
const {
    getProducts,
    getProduct
} = new ProductController()


const router = Router()

// definiendo los distos métodos de crud de productos
//  req, res, next
router.get('/', getProducts)
router.get('/:pid', getProduct)


export default router
