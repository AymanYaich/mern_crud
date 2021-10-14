const mongoose = require('mongoose');

const CustomerSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:true
        
    },
    age :{
        type:Number,
        required:true
        
    },
    job:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
    //imageId:String
});

const Customer =  mongoose.model('Customer',CustomerSchema);

module.exports = Customer;