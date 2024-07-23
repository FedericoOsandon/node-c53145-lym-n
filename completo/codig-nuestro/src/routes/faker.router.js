const {Router} = require('express')
const { genereateUser } = require('../utils/faker')
 
const router = Router()

router.get('/', (req, res) => {
    try{
        let user = []
        for(let i=0; i<100; i++){
            user.push(genereateUser())
        }

        res.send({
            status: 'success',
            payload: user
        })
    }catch(error){
        logger.info(error)
    }
})

module.exports = router