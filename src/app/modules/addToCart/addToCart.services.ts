import { IAddToCart } from './addToCart.interface'
import { AddToCart } from './addToCart.model'

// }
const insertCartIntoDB = async (payload: IAddToCart) => {
  // console.log(id, productCount)
  const result = await AddToCart.create(payload)
  return result
}

export const AddToCartServices = {
  insertCartIntoDB,
}
