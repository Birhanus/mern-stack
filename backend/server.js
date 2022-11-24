const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

// add body parser for raw json
app.use(express.json())
// for url encoding
app.use(express.urlencoded({extended: false}))

app.use('/api/employees', require('./routes/employeeRoutes'))


app.listen(port, () => console.log(`Server started on port ${port}`)) 