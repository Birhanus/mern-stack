const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const {errorHandler} = require('./middleware/errorMiddleware')
 
const colors = require('colors')

const connectDB = require('./config/db')

connectDB( )

const app = express()
 
// add body parser for raw json
app.use(express.json())
// for url encoding
app.use(express.urlencoded({extended: false}))

app.use('/api/employees', require('./routes/employeeRoutes'))

//use thes error hander thes will overrire exprees error handeler
app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`)) 