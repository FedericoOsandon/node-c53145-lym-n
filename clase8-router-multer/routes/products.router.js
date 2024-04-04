import { Router } from 'express'

const router = Router()

// definiendo los distos métodos de crud de productos
router.get('/', (req, res) => {
    res.send('get de productos')
})

export default router