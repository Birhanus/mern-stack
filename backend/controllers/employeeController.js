
// @desc Get Employee
// @route GET api/employee
const getEmployee = (req, res) => {
    res.status(200).json({welcome: 'Get employee'})
}

/**
 * Add Employee
 * @desc add Employee
 * @route POST api/employee 
 * @author  Birhanu Shimles <https://github.com/Birhanus>
 */ 
const addEmployee = (req, res) => {
    console.log(req.body)
    res.status(200).json({Welcome: 'add  employee'})
}

/**
 * update employee data
 * @desc update Employee
 * @route PUT api/employee/:id
 */ 
const updateEmployee = (req, res) => {
    res.status(200).json({Welcome: `update employee ${req.params.id}`})
}


/**
 * Delete Employee
 * @desc delete Employee
 * @route DELETE api/employee/:id
 */
const deleteEmployee = (req, res) => {
    res.status(200).json({Welcome: `Delete employee ${req.params.id}`})
}

module.exports ={
    getEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee,
}