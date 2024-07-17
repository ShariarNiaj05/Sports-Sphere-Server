import { model, Schema } from 'mongoose'
import { ICheckout, IProductInfo } from './checkout.interface'

const productInfoSchema = new Schema<IProductInfo>(
  {
    brand: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    sportsCategory: {
      type: String,
      required: true,
    },
    stockQuantity: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    __v: {
      type: Number,
      required: true,
    },
  },
  // { _id: false },
)

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
    productInfo: [productInfoSchema],
  },
  {
    timestamps: true,
  },
)

export const Checkout = model<ICheckout>('Checkout', checkoutSchema)
