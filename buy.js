const mongoose = require('mongoose');
const Product=require('./new_productmodule')

const purchaseSchema=new mongoose.Schema({
  
    buy_id:[{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}]
    
});

const Purchase = new mongoose.model("Purchase", purchaseSchema);
module.exports=Purchase;


