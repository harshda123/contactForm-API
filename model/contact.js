const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    Fname:{
        type:String,
        required:true
    },
    Lname:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:String,
    
    mobile_no:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('contact',contactSchema)