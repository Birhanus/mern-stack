const asyncHandler = require('express-async-handler')

/** 
 * Get Employe 
 * @desc Get Employee
 * @route GET api/employee
 * @author Birhanu Shimles <https://github.com/Birhanus>
 */
const getEmployee = asyncHandler(async (req, res) => {
    res.status(200).json({welcome: 'Get employee'})
})

/**
 * Add Employee
 * @desc add Employee
 * @route POST api/employee 
 */ 
const addEmployee = async (req, res) => {
    console.log(req.body)
    res.status(200).json({Welcome: 'add  employee'})
}

/**
 * Update employee data
 * @desc update Employee
 * @route PUT api/employee/:id
 */ 
const updateEmployee = async (req, res) => {
    res.status(200).json({Welcome: `update employee ${req.params.id}`})
}


/**
 * Delete Employee
 * @desc delete Employee
 * @route DELETE api/employee/:id
 */
const deleteEmployee = async (req, res) => {
    res.status(200).json({Welcome: `Delete employee ${req.params.id}`})
}

module.exports ={
    getEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee,
}