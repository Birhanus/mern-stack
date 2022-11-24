const express = require('express')
const router =  express.Router()


router.get('/', (req, res) => {
    res.status(200).json({Welcome: 'get employe'})
})

router.post('/', (req, res) => {
    res.status(200).json({Welcome: 'add  employe'})
})

router.put('/:id', (req, res) => {
    res.status(200).json({Welcome: `update employe ${req.params.id}`})
})

router.delete('/id', (req, res) => {
    res.status(200).json({Welcome: `update employe ${req.params.id}`})
})


module.exports = router

