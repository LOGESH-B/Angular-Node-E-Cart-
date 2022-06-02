var express = require('express')
const mongoose = require('mongoose');
var cors = require('cors')
var app = express()
const Product = require('./new_productmodule')
const Cart = require('./cart')
const Purchase=require('./buy')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors())
mongoose.connect("mongodb://localhost:27017/miniproduct");

app.get('/product/:id', function (req, res, next) {
  const { id } = req.params
  console.log(id)
  Product.findOne({ p_id: id }, (err, found) => {
    if (err) {
      console.log(err)
    }
    console.log('bii')
    console.log(found)
    res.json(found)
  })
})
app.get('/products', (req, res, next) => {
  Product.find({}, (err, found) => {
    if (err) {
      console.log(err)
    }
    res.json(found)
  })

})

app.get('/cart', async (req, res, next) => {
  const carts = await Cart.find({}).populate('card_id').then(found => {
    console.log("poda", found[0].card_id)
    res.json(found)
  })
})

app.post('/cart', bodyParser.json(), async (req, res, next) => {
  card_id = req.body._id
  Cart.findOne({}, async (err, found) => {
    if (err) {
      console.log(err)
    }
    flag=1
    await found.card_id.forEach(async(element) => {
      console.log(card_id)
      console.log(element)   
      if(element==card_id && flag==1) {
        flag=0
        console.log('0000000000000') 
      }
    })
    if(flag!=0 ){
      console.log('ppppppp')
      console.log(found)
      await found.card_id.push(card_id)
      console.log(found)
      await found.save()
      //res.json(found)
    };
   
  })


  Cart.findOne({}, async (err, found) => {
    if (err) {
      console.log(err)
    }
    console.log(found)
    await found.card_id.push(card_id)
    console.log(found)
    //await found.save()
    //res.json(found)
  })


})

app.get('/purchase', async (req, res, next) => {
   await Purchase.find({}).populate('buy_id').then(found => {
    console.log("poda", found[0].buy_id)
    res.json(found)
  })
})

app.post('/purchase', bodyParser.json(), async (req, res, next) => {
  buy_id = req.body._id
  Purchase.findOne({}, async (err, found) => {
    if (err) {
      console.log(err)
    }
    flag=1
    await found.buy_id.forEach(async(element) => {
      console.log(buy_id)
      console.log(element)   
      if(element==buy_id && flag==1) {
        flag=0
        console.log('0000000000000') 
      }
    })
    const find=await Cart.findOne({});
    console.log(find)
    await find.card_id.forEach(async(element,index) => {

      console.log(element)   
      if(element==buy_id ) {
       console.log( find.card_id.splice(index, 1));
       await find.save()
        console.log('111111111111111') 
      }
    })
   

    if(flag!=0 ){
      console.log('2222222222222222')
      console.log(found)
      await found.buy_id.push(buy_id)
      console.log(found)
      await found.save()
      //res.json(found)
    };
   
  })


})


app.post('/newproducts', bodyParser.json(), (req, res) => {
  const newpro = new Product(req.body);
  console.log(req.body)

  if (!newpro) {
    console.log(err)
  }
  else {
    newpro.save()
    res.json({ msg: 'Successfully inserted' })
  }



})

app.listen(8080, function () {
  console.log('CORS-enabled web server listening on port 80')
})