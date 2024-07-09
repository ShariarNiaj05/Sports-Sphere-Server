import { Router } from 'express'
import { ProductController } from './products.controller'

const router = Router()

router.post('/add-product', ProductController.insertProduct)
router.delete('/delete-product/:id', ProductController.deleteProduct)
router.put('/update-product/:id', ProductController.updateProduct)

export const ProductRoutes = router
