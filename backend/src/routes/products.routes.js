import { Router } from "express";

import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { productSchema } from "../schemas/product.js";
import { 
  getProducts,
  getFilterProducts,
  getUserProducts,
  getUserProduct,
  getProduct, 
  uploadImg, 
  createProduct, 
  updateProduct, 
  deleteProduct 
} from '../controllers/products.controller.js';

const router = Router();

router.get('/products', getProducts)
router.get('/products/category/:filter', getFilterProducts)
router.get('/products/user', authRequired, getUserProducts)
router.get('/products/id/:id', getProduct)
router.get('/products/user/:productId', authRequired, getUserProduct)

router.post('/products/uploadImage', authRequired, uploadImg)
router.post('/products', authRequired, validateSchema(productSchema), createProduct)
router.put('/products', authRequired, validateSchema(productSchema), updateProduct)
router.delete('/products/:id', authRequired, deleteProduct)

export default router;