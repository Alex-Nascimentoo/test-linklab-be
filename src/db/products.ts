import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  grade: Number,
  price: Number
})

export const ProductModel = mongoose.model('Product', ProductSchema)

// export const getProducts = () => ProductModel.find()

// export const createProduct = (data: Record<string, any>) => {
//   new ProductModel(data).save()
//     .then(product => product.toObject())
// }

// export const deleteProduct = (id: string) => ProductModel.findOneAndDelete({ _id: id })

// export const updateProduct = (id: string, newData: Record<string, any>) => {
//   ProductModel.findByIdAndUpdate(id, newData)
// }
