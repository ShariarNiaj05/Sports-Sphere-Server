import { IProduct } from './products.interface'
import { Product } from './products.model'

const insertProductIntoDB = async (payload: IProduct) => {
  const result = await Product.create(payload)
  return result
}

export const ProductServices = {
  insertProductIntoDB,
}
