import { Router } from 'express'
import { ProductController } from './products.controller'

const router = Router()

router.get('/', ProductController.getProducts)
router.get('/:id', ProductController.getSingleProduct)
router.post('/add-product', ProductController.insertProduct)
router.delete('/delete-product/:id', ProductController.deleteProduct)
router.put('/update-product/:id', ProductController.updateProduct)

export const ProductRoutes = router
