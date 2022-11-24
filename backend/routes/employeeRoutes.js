const express = require('express')
const router =  express.Router()
const {getEmployee} = require('../controllers/employeeController')


router.get('/', getEmployee)

router.post('/', (req, res) => {
    res.status(200).json({Welcome: 'add  employee'})
})

router.put('/:id', (req, res) => {
    res.status(200).json({Welcome: `update employee ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({Welcome: `Delete employee ${req.params.id}`})
})


module.exports = router

