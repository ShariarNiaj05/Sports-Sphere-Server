import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { CheckoutServices } from './checkout.services'

const insertCheckout = catchAsync(async (req, res) => {
  // const { productId, productCount } = req.body
  console.log('req.body', req.body)
  const result = await CheckoutServices.insertCheckoutIntoDB(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order placed successfully',
    data: result,
  })
})

export const checkoutController = {
  insertCheckout,
}
