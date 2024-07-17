import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { Product } from '../products/products.model'
import { ICheckout } from './checkout.interface'
import { Checkout } from './checkout.model'

const insertCheckoutIntoDB = async (payload: Partial<ICheckout>) => {
  const { productInfo } = payload

  //   console.log(productInfo)
  if (productInfo) {
    await Promise.all(
      productInfo?.map(async item => {
        const productId = item._id

        await Product.findByIdAndUpdate(
          productId,
          { stockQuantity: item.stockQuantity - item.quantity },
          { new: true },
        )
        console.log(productId)
      }),
    )
    const result = await Checkout.create(payload)
    return result
  } else {
    throw new AppError(httpStatus.BAD_REQUEST, 'Now product found')
  }
}

export const CheckoutServices = {
  insertCheckoutIntoDB,
}
