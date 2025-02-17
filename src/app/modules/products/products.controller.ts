import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { ProductServices } from './products.services'

const getProducts = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProductsIntoDB()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products retrieved successfully',
    data: result,
  })
})
const getSingleProduct = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await ProductServices.getSingleProductFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product details retrieved successfully',
    data: result,
  })
})

const insertProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.insertProductIntoDB(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product added successfully',
    data: result,
  })
})

const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await ProductServices.deleteProductFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product deleted successfully',
    data: result,
  })
})
const updateProduct = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await ProductServices.updateProductIntoDB(id, req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product updated successfully',
    data: result,
  })
})

export const ProductController = {
  insertProduct,
  deleteProduct,
  updateProduct,
  getProducts,
  getSingleProduct,
}
