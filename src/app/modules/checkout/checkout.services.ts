import { ICheckout } from './checkout.interface'
import { Checkout } from './checkout.model'

const insertCheckoutIntoDB = async (payload: ICheckout) => {
  // console.log(id, productCount)
  const result = await Checkout.create(payload)
  return result
}

export const CheckoutServices = {
  insertCheckoutIntoDB,
}
