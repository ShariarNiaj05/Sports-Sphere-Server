import { model, Schema } from 'mongoose'
import { IProduct } from './products.interface'

export const productSchema = new Schema<IProduct>(
  {
    productName: {
      type: String,
      required: [true, 'Product Name Is Required'],
    },
    sportsCategory: {
      type: String,
      required: [true, 'Sports Category Is Required'],
    },
    stockQuantity: {
      type: Number,
      required: [true, 'Stock Quantity Is Required'],
    },
    brand: {
      type: String,
      required: [true, 'Brand Is Required'],
    },
    rating: {
      type: Number,
      required: [true, 'Rating Is Required'],
    },
    productDescription: {
      type: String,
      required: [true, 'Product Description Is Required'],
    },
    price: {
      type: Number,
      required: [true, 'Price Is Required'],
    },
    image: {
      type: String,
      required: [true, 'Image Is Required'],
    },
  },
  {
    timestamps: true,
  },
)

export const Product = model<IProduct>('Product', productSchema)
