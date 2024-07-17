import { Router } from 'express'
import { checkoutController } from './checkout.controller'

const router = Router()

router.put('/', checkoutController.insertCheckout)

export const checkoutRoutes = router
