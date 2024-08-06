const { Router} = require('express')
const adoptionsController = require('../controllers/adoptions.controller.js')

const router = Router()

router.get('/',adoptionsController.getAllAdoptions)
router.get('/:aid',adoptionsController.getAdoption)
router.post('/:uid/:pid',adoptionsController.createAdoption)

module.exports = router