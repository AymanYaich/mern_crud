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
    image:String
    //imageId:String
});

const Customer =  mongoose.model('Customer',CustomerSchema);

module.exports = Customer;