import { Router } from 'express'
const router = Router()
// utf-8

router.param('word', async(req,res,next,word) => {
    // consulta await traer de la bas de daots esta palaba
    req.word = word
    next()
})

// router.get('/params/:word([a-zA-Z%C3%A1%C3%A9]+)', (req, res) => {
router.get('/params/:word([0-9]+)', (req, res) => {
    const {word} = req.params
    console.log(req.word)
    res.send(word)
})

router.get('*', (req,res) => {
    res.send('not found')
})



export default router
// á -> %C#%A1
// é -> %C3%A9
// í -> %C#%AD