import { Router } from 'express'
import { ProductRoutes } from '../modules/products/products.route'
import { AddToCartRoutes } from '../modules/addToCart/addToCart.route'
import { checkoutRoutes } from '../modules/checkout/checkout.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/product',
    route: ProductRoutes,
  },
  {
    path: '/cart',
    route: AddToCartRoutes,
  },
  {
    path: '/checkout',
    route: checkoutRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
