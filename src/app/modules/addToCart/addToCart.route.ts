import { Router } from 'express'
import { addToCartController } from './addToCart.controller'

const router = Router()

// router.get('/', ProductController.getProducts)
// router.get('/:id', ProductController.getSingleProduct)
// router.post('/add-product', ProductController.insertProduct)
// router.delete('/delete-product/:id', ProductController.deleteProduct)
router.put('/add-to-cart', addToCartController.insertToCart)

export const AddToCartRoutes = router
