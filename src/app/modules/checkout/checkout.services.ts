import { ICheckout } from './checkout.interface'
import { Checkout } from './checkout.model'

const insertCheckoutIntoDB = async (payload: Partial<ICheckout>) => {
  const { productInfo } = payload

  //   console.log(productInfo)
  if (productInfo) {
    productInfo?.map(item => console.log(item._id))
  }
  const result = await Checkout.create(payload)
  return result
}

export const CheckoutServices = {
  insertCheckoutIntoDB,
}
