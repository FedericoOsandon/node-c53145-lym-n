const { Router } = require('express')
const { ParametrosController: { getSearchWord, definirParams } } = require('../controllers/parametros.controller')

const router = Router()

/// Prueba de ruta con parámetros____________________________________________________

router.param('word', definirParams)


//número 1
// GET api/parametros /:category
// router.get('/:word([a-zA-Z]+)', getSearchWord)

//número 2
router.get('/:word([a-z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)', getSearchWord)

// router.get('/:word([A-Z%C3%81%C3%89%C3%8D%C3%93%C3%9A%C3%9C]+)/:lenguage([a-z])', getSearcWord)
// router.put('/:word([A-Z%C3%81%C3%89%C3%8D%C3%93%C3%9A%C3%9C]+))', getSearcWord)
// router.delete('/:word([A-Z%C3%81%C3%89%C3%8D%C3%93%C3%9A%C3%9C]+))', getSearcWord)

// número 3



router.get('*', async (req, res)=>{
    res.status(404).json({
        mensaje: 'ruta no encontrada'
    })
})

module.exports = router