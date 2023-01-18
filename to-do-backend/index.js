const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const todoRoute = require('./routes/todos')
const mongoose = require('mongoose')

app.use(cors())
app.use(bodyParser.json())
app.use('/todos', todoRoute)

mongoose.connect("mongo connection string").then(data => {
    console.log("connected to DB")
}).catch(error => {
    console.log(error)
})

app.listen(3000)