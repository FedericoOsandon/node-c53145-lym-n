const { Router } = require('express')
const { authToken } = require('../../utils/jwt')
const {
    getProdutcs,
    createProdutcs,
    getProdutc,
    updateProduct,
    deleteProduct
} = require('../../controllers/products.controller.js')

const router = Router()


router
    .get('/',       getProdutcs)
    .get('/:id',    getProdutc)
    .post('/',      createProdutcs)
    .put('/:id',    updateProduct) 
    .delete('/:id', deleteProduct)


module.exports = router
// export default router

