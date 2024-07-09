import catchAsync from '../../utils/catchAsync'

const insertProduct = catchAsync(async (req, res) => {
  console.log('insertProduct controller')
})

export const ProductController = {
  insertProduct,
}
