import { IProduct } from './products.interface'
import { Product } from './products.model'

const getAllProductsIntoDB = async () => {
  const result = await Product.find()
  return result
}
const insertProductIntoDB = async (payload: IProduct) => {
  const result = await Product.create(payload)
  return result
}
const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id)
  return result
}
const updateProductIntoDB = async (id: string, payload: Partial<IProduct>) => {
  const result = await Product.findByIdAndUpdate(id, payload, { new: true })
  return result
}

export const ProductServices = {
  insertProductIntoDB,
  deleteProductFromDB,
  updateProductIntoDB,
  getAllProductsIntoDB,
}
