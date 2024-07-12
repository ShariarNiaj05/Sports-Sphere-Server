import { model, Schema } from 'mongoose'
import { IAddToCart } from './addToCart.interface'

export const addToCartSchema = new Schema<IAddToCart>(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
    productCount: {
      type: Number,
      required: [true, 'Product Count Is Required'],
    },
  },
  {
    timestamps: true,
  },
)

export const AddToCart = model<IAddToCart>('AddToCart', addToCartSchema)
