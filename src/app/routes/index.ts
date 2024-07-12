import { Router } from 'express'
import { ProductRoutes } from '../modules/products/products.route'
import { AddToCartRoutes } from '../modules/addToCart/addToCart.route'

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
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
