const mongoose = require('mongoose');
const Product=require('./new_productmodule')

const cartSchema=new mongoose.Schema({
  
    card_id:[{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}]
    
});

const Cart = new mongoose.model("Cart", cartSchema);
module.exports=Cart;


