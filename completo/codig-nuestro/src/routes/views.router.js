const ClassRouter = require('./router')
const {
    renderInicio,
    renderProfile,
    renderDetalle,
    renderCart,
    renderProducts,
    renderLogin,
    renderRegister,
    renderRealTimeProducts
} = require('../controllers/views.controller')
class ViewsRouter extends ClassRouter {
    init(){      
        this.get('/',                 ['PUBLIC'], renderProducts)
        this.get('/inicio',           ['PUBLIC'], renderInicio)
        this.get('/profile',          ['PUBLIC'], renderProfile)
        this.get('/detalle/:pid',     ['PUBLIC'], renderDetalle)
        this.get('/carts/:cid',       ['USER'],   renderCart)
        this.get('/login',            ['PUBLIC'], renderLogin)
        this.get('/register',         ['PUBLIC'], renderRegister)
        this.get('/realtimeproducts', ['PUBLIC'], renderRealTimeProducts)
    }
}



module.exports = new ViewsRouter()