//import
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const contactRoute = require('./route/contactRoute')

 require('dotenv/config')

 //initializaation
 const app = express()

 //middleware
 app.use(express.json())
 app.use(cors())

 //default
 app.get('/',(req, res) =>{
    res.send("home");
 })

 app.use('/api/contact', contactRoute)

 app.listen(process.env.PORT)

 async function main(){
    const res = await mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
    const data = await res.default
    const response = data.STATES['1']
    console.log(response);
}

main()