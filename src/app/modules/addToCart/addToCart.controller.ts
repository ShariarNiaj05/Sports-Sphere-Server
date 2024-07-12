import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { AddToCartServices } from './addToCart.services'

const insertToCart = catchAsync(async (req, res) => {
  // const { productId, productCount } = req.body

  const result = await AddToCartServices.insertCartIntoDB(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart updated successfully',
    data: result,
  })
})

/* const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await ProductServices.deleteProductFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product deleted successfully',
    data: result,
  })
}) */

/* const updateProduct = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await ProductServices.updateProductIntoDB(id, req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product updated successfully',
    data: result,
  })
}) */

export const addToCartController = {
  insertToCart,
  // deleteProduct,
  // updateProduct,
  // getProducts,
  // getSingleProduct,
}
