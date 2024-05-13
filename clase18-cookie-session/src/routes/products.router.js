import { Router } from 'express'
import { productModel } from '../models/products.model.js'

const router = Router()

// definiendo los distos métodos de crud de productos
router.get('/', (req, res) => {
    res.send('get de productos')
})

router.post('/', async (req, res)=>{
    const {body} = req

    const result = await productModel.create(body)
    res.send(result)
})

export default router

// next(err);
//   }
// });

// productsRouter.put('/:pid', async (req, res, next) => {
//   try {
//     const productId = req.params.pid;
//     const updatedFields = req.body;
//     const product = await productManager.updateProduct(productId, updatedFields);
//     res.json(product);
//   } catch (err) {
//     next(err);
//   }
// });

// productsRouter.delete('/:pid', async (req, res, next) => {
//   try {
//     const productId = req.params.pid;
//     await productManager.deleteProduct(productId);
//     res.json({ message: 'Product deleted successfully' });
//   } catch (err) {
//     next(err);
//   }
// });

// // Routes for handling carts
// const cartsRouter = express.Router();

// cartsRouter.post('/', async (req, res, next) => {
//   try {
//     const newCart = await cartManager.createCart();
//     res.status(201).json(newCart); } catch (err) {
//       next(err);