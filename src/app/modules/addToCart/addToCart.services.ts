// const getAllProductsIntoDB = async () => {
//   const result = await Product.find().sort({ createdAt: -1 })
//   return result
// }
// const getSingleProductFromDB = async (id: string) => {
//   const result = await Product.findById(id)
//   return result

import { IAddToCart } from './addToCart.interface'
import { AddToCart } from './addToCart.model'

// }
const insertCartIntoDB = async (payload: IAddToCart) => {
  // console.log(id, productCount)
  const result = await AddToCart.create(payload)
  return result
}
// const deleteProductFromDB = async (id: string) => {
//   const result = await Product.findByIdAndDelete(id)
//   return result
// }
// const updateProductIntoDB = async (id: string, payload: Partial<IProduct>) => {
//   const result = await Product.findByIdAndUpdate(id, payload, { new: true })
//   return result
// }

export const AddToCartServices = {
  insertCartIntoDB,
  // insertProductIntoDB,
  // deleteProductFromDB,
  // updateProductIntoDB,
  // getAllProductsIntoDB,
  // getSingleProductFromDB,
}
