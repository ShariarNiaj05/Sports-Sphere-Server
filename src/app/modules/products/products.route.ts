import { Router } from 'express'
import { ProductController } from './products.controller'

const router = Router()

router.post('/add-product', ProductController.insertProduct)

export const ProductRoutes = router
