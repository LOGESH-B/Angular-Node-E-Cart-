const mongoose = require('mongoose');

const productSchema=new mongoose.Schema({
    p_id:{
        type:Number,
        required:true,
        unique:true
    },
    p_name:{
        type:String,
        required:true,
    },
    p_price:{
        type:Number,
        required:true
    },
    p_type:{
        type:String,
        required:true
    },
    p_url:{
        type:String,
        required:true
    },
    p_desc:{
        type:String,
        required:true
    }

    
    
});

const Product = new mongoose.model("Product", productSchema);
module.exports=Product;


