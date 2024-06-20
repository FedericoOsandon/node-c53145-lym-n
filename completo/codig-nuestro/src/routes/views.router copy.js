const {Router} = require('express')
const { logger } = require('../middleware/logger')
const { productService, cartService } = require('../services')

const router = Router()

const products = [
    {title: 'Gorra rosa',  price: 400, imageUrl: 'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg', category:'gorras'},
    {title: 'Gorra rosa',  price: 350, imageUrl: 'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg', category:'gorras'},
    {title: 'Gorra rosa',  price: 300, imageUrl: 'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg', category:'gorras'},
    {title: 'Gorra rosa',  price: 200, imageUrl: 'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg', category:'gorras'},
    {title: 'Gorra rosa',  price: 150, imageUrl: 'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg', category:'gorras'}
]


 let users = [{email: 'fede@gmail.com', password:'fede', role: 'admin'}]

router.get('/inicio', async (req, res)=>{    
    try {
        console.log('auth principal')
        let testUser = {
            name: 'Federico',
            last_name: 'Osandón',
            role: 'admin',
        }
        // req.session.user = testUser.name
        // req.session.admin = true
        res.status(200).render('index', {
            user: testUser,
            isAdmin: testUser.role==='admin',
            products,
            showNav: true
            // style: 'index.css'
        })        
    } catch (error) {
        logger.info(error)
    }
})

router.get('/profile', async (req, res)=>{
    res.status(200).render('profile', {
        showNav: true
    })
})

router.get('/detalle/:pid', async (req, res)=>{
    const {pid} = req.params
    const product = await productService.getProduct(pid)
    res.render('detalle', {
        product,
        showNav: true
    })
})

router.get('/carts', async (req, res)=>{
    try {
        // const cart = await cartService.getCart()
        const cart = []
        res.render('cart', {
            cart,
            showNav: true
        })        
    } catch (error) {
        logger.error(error)
    }
})

router.get('/', async (req, res)=>{
    try {
        res.status(200).render('products', {
            showNav: true
        })        
    } catch (error) {
        logger.info(error)
    }
})

//_________________________________________________________________________
router.get('/login', async (req, res)=>{    
    try {
        res.status(200).render('login', {
            showNav: true
        })        
    } catch (error) {
        logger.info(error)
    }
})

router.get('/register', async (req, res)=>{
    try {
        
        res.status(200).render('register',{
            showNav: true
        })
    } catch (error) {
        logger.info(error)
    }
})

router.get('/realtimeproducts', async (req, res) => {
    try {
        // console.log('realtime products')
        // return  res.send('realtime')
        // const products = await Product.getProducts()
        res.render('productsRealTime', {
            showNav: true
        })
    } catch (error) {
        console.log(error)
    }
})

router.get('/cart', (req, res)=>{
    res.render('cart')
})

module.exports = router