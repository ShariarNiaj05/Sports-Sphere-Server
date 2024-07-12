import { Types } from 'mongoose'

export interface IAddToCart {
  productId: Types.ObjectId
  productCount: number
}
