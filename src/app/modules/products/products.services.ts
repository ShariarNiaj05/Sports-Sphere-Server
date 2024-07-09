import { IProduct } from './products.interface'
import { Product } from './products.model'

const insertProductIntoDB = async (payload: IProduct) => {
  const result = await Product.create(payload)
  return result
}
const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id)
  return result
}

export const ProductServices = {
  insertProductIntoDB,
  deleteProductFromDB,
}
