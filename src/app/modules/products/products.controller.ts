import catchAsync from '../../utils/catchAsync'

const insertProduct = catchAsync(async (req, res) => {
  res.send('insertProduct controller')
  console.log('insertProduct controller')
})

export const ProductController = {
  insertProduct,
}
