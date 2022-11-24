const getEmployee = (req, res) => {
    res.status(200).json({welcome: 'Get employee'})
}

module.exports ={
    getEmployee
}