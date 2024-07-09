import { Router } from 'express'
import CartDaoMongo from '../../daos/MONGO/cartsDao.mongo.js'
// import { cartsModel } from '../models/carts.model'


const router = Router()
const cartService = new CartDaoMongo()

router.get('/', async (req, res)=>{
    const carts = await cartService.getCarts()
    res.send(carts)
})
router.post('/', async (req, res)=>{
    const carts = await cartService.createCart()
    res.send(carts)
})
router.post('/:cid/products/:pid', async (req, res)=>{
    const {cid, pid} = req.params

    const result = await cartService.addProduct(cid, pid)
    res.send(result)
})

export default router