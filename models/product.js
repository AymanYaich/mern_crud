const mongoose = require('mongoose');

const ProductSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:true
        
    },
    price :{
        type:Number,
        required:true
        
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:String,
    
    date :{
        type:Date,
        default:Date.now
       
    }
});

const Product =  mongoose.model('Product',ProductSchema);

module.exports = Product;