import { model, Schema } from 'mongoose'
import { ICheckout } from './checkout.interface'
import { productSchema } from '../products/products.model'

export const checkoutSchema = new Schema<ICheckout>(
  {
    userInfo: {
      name: {
        type: String,
        required: [true, 'User Name Is Required'],
      },
      email: {
        type: String,
        required: [true, 'Email Is Required'],
      },
      phoneNumber: {
        type: Number,
        required: [true, 'Phone Number Is Required'],
      },
      deliveryAddress: {
        type: String,
        required: [true, 'Delivery Address Is Required'],
      },
    },
    productInfo: [productSchema],
  },
  {
    timestamps: true,
  },
)

export const Product = model<ICheckout>('Checkout', checkoutSchema)
