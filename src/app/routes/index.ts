import { Router } from 'express'
// import { demoRoute } from '../modules/scratch/scratch.route'
import { ProductRoutes } from '../modules/products/products.route'

const router = Router()

const moduleRoutes = [
  /*  {
    path: '/',
    route: demoRoute,
  }, */
  {
    path: '/product',
    route: ProductRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
