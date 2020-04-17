const express = require('express')
const router = express.Router()
const Product = require('../models/products');

async function getProduct(req, res, next) {
  try {
    res.product = await Product.findById(req.params.id)
    if (res.product === null) {
      return res.status(404).json({ message: 'This product was not found, try another id'})
    }
  } catch(err){
    return res.status(500).json({ message: err.message })
  }
  next()
}

router.get('/', async (req, res) => {
  await new Product({'id': 0, 'name': 'Purple Logo Saints Tee', 'price': 11.91, 'picture': 'https://res.cloudinary.com/teepublic/image/private/s--jurwYve9--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_498/c_crop,g_north_west,h_626,w_470,x_14,y_14/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1494120371/production/designs/1577423_1.jpg'}).save();
  await new Product({'id': 1, 'name': 'Purple Logo Long Sleeve', 'price': 25.67, 'picture': 'https://res.cloudinary.com/teepublic/image/private/s--3DcY7c-Q--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_399/c_crop,g_north_west,h_502,w_376,x_11,y_11/g_north_west,u_upload:v1446840676:production:blanks:vckar9iig1uncttqvjgw,x_-455,y_-298/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1494120371/production/designs/1577423_1.jpg'}).save();
  await new Product({'id': 2, 'name': '3rd Street Saints Black Tee', 'price': 21.45, 'picture': 'https://res.cloudinary.com/teepublic/image/private/s--GqWPsqNi--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1446164425/production/designs/76817_2.jpg'}).save();
  await new Product({'id': 3, 'name': 'Fleur-de-lis Tee', 'price': 20.02, 'picture': 'https://i.ebayimg.com/images/g/WaQAAMXQGQRR9tGc/s-l300.jpg'}).save();
  await new Product({'id': 4, 'name': 'Mr. President Purple Tee', 'price': 28.43, 'picture': 'https://images-na.ssl-images-amazon.com/images/I/61kra9mZUSL.jpg'}).save();
  await new Product({'id': 5, 'name': 'Mr. President White Tee', 'price': 28.43, 'picture': 'https://images-na.ssl-images-amazon.com/images/I/61ZxY5YFMEL.jpg'}).save();
  
  res.status(201).json({"status": "success"});
})

router.get('/products', async (req, res) => {
  res.json(await Product.find());
})

router.get('/products/:id', getProduct, async (req, res) => {
  res.json(res.product);
})

router.post('/products/new', async (req, res) => {
  const newProduct = await new Product(req.body).save();
  res.status(201).json(newProduct);
})

router.delete('/products/:id', getProduct, async (req, res) => {
  await res.product.remove()
})

router.patch('/products/edit/:id', getProduct, async (req, res) => {
  res.product.name = req.product.name;
  res.product.value = req.product.value;
  res.product.picture = req.product.picture;
  const productUpdated = await res.product.save();
  res.json(productUpdated);
})
  
module.exports = router