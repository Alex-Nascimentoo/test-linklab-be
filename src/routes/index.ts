import express from 'express'
import { ProductModel as Product } from '../db/products'

const router = express.Router()

router.get('/products', async (req, res) => {
  try {
    const productList = await Product.find()

    return res.status(200).json(productList)
  } catch (err) {
    console.log(err)
    return res.sendStatus(400)
  }
})

router.get('/products/:id', async (req, res) => {
  const { id } = req.params
  
  try {
    const product = await Product.findById(id)

    return res.status(200).json(product)
  } catch (err) {
    console.log(err)
    return res.sendStatus(400)
  }
})

router.post('/products', async (req, res) => {
  const { title, grade, price } = req.body
  
  try {
    const newProduct = new Product({
      title,
      grade,
      price
    })
    
    await newProduct.save()
    
    return res.status(201).json(newProduct)
  } catch (err) {
    console.log(err)
    return res.sendStatus(400)
  }

})

export default (): express.Router => {
  return router
}