import { IProduct } from '../products/products.interface'

export interface ICheckout {
  userInfo: {
    name: string
    email: string
    phoneNumber: number
    deliveryAddress: string
  }
  productInfo: IProduct[]
}
