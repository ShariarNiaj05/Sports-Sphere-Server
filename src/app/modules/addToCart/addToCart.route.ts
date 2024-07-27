import { Router } from 'express'
import { addToCartController } from './addToCart.controller'

const router = Router()

router.put('/add-to-cart', addToCartController.insertToCart)

export const AddToCartRoutes = router
