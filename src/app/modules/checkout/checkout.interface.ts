export interface IProductInfo {
  _id?: string
  brand: string
  image: string
  price: number
  productDescription: string
  productName: string
  quantity: number
  rating: number
  sportsCategory: string
  stockQuantity: number
  totalPrice: number
  __v: number
}

export interface ICheckout {
  userInfo: {
    name: string
    email: string
    phoneNumber: number
    deliveryAddress: string
  }
  productInfo: IProductInfo[]
}
