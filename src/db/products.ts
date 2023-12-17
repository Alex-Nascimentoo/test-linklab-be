import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  grade: Number,
  price: Number
})

export const ProductModel = mongoose.model('Product', ProductSchema)
