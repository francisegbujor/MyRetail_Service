const express = require('express')
const router = express.Router()
const Product = require('../models/product')

//Gets all the item in the list
router.get('/', async(req,res) => { // => = function with no name
   try{
            const products = await Product.find()
            res.json(products)
   }catch(err){
        res.send('Error ' + err)
   }
})

//Gets an individual item from the list
router.get('/:id', async(req,res) => { // => = function with no name
    try{
             const product = await Product.findById(req.params.id)
             res.json(product)
    }catch(err){
         res.send('Error ' + err)
    }s
 })

//Creates an item 
router.post('/', async(req,res) => {
    const product = new Product({

        name: req.body.name,
        price: req.body.price,
        currency: req.body.currency
    })

    try{
        const p1 = await product.save()
        res.json(p1)
    }catch(err){
        res.send('Error')
    }
})

//Updates an individual item by price
router.put('/:id', async(req,res) => {
    try {
        const product = await Product.findById(req.params.id)
      //product.name = req.body.name
        product.price = req.body.price
     // product.currency = req.body.currency
        const p1 = await product.save()
        res.json(p1)
    } catch (err) {
        res.send('Error' + err)
    }
})

//deletes an item using the item id
router.delete('/:id', async(req,res) => {
    try {
        const product = await Product.findById(req.params.id)
            const p1 = await product.delete()
            res.json(p1)
        } catch (err) {
            res.send('Error')
        }

})


module.exports = router
