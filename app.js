const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectdb = require('./db/connectdb')
const web = require('./route/web.js')

//database connection
connectdb()

//set template engine
app.set('view engine','ejs')

//middleware to get data from form
app.use(express.urlencoded({extended: true}))

//load routes
app.use(web)


app.listen('8000',()=>{
    console.log('Server running on port http://localhost:8000')
})
