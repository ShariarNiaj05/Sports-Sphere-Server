import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { ProductServices } from './products.services'

const insertProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.insertProductIntoDB(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product added successfully',
    data: result,
  })
})

export const ProductController = {
  insertProduct,
}
