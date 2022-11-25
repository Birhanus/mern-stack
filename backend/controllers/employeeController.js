const asyncHandler = require('express-async-handler')

const Employee = require('../models/employeeModel')


/** 
 * Get Employe 
 * @desc Get Employee
 * @route GET api/employee
 * @author Birhanu Shimles <https://github.com/Birhanus>
 */
const getEmployee = asyncHandler(async (req, res) => {
    const employees = await Employee.find()
    res.status(200).json({employees})
})

/**
 * Add Employee 
 * @desc add Employee
 * @route POST api/employee 
 */ 
const addEmployee = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Add the text filed please')
    }
})

/**
 * Update employee data
 * @desc update Employee
 * @route PUT api/employee/:id
 */ 
const updateEmployee = asyncHandler(async (req, res) => {
    res.status(200).json({Welcome: `update employee ${req.params.id}`})
})


/**
 * Delete Employee
 * @desc delete Employee
 * @route DELETE api/employee/:id
 */
const deleteEmployee = asyncHandler(async (req, res) => {
    res.status(200).json({Welcome: `Delete employee ${req.params.id}`})
})

module.exports ={
    getEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee,
}