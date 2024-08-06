const { Router } =  require('express')
const petsController =  require('../controllers/pets.controller.js')
const {uploader} =  require('../utils/uploader.js')

const router = Router()

router.get('/',petsController.getAllPets)
router.post('/',petsController.createPet)
router.post('/withimage',uploader.single('image'), petsController.createPetWithImage)
router.put('/:pid',petsController.updatePet)
router.delete('/:pid',petsController.deletePet)

module.exports = router