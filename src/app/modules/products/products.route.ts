import { Router } from 'express'
import { ProductController } from './products.controller'

const router = Router()

router.post('/add-product', ProductController.insertProduct)
router.delete('/delete-product/:id', ProductController.deleteProduct)

export const ProductRoutes = router
