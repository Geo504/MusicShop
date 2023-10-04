import { Router } from "express";

import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { productSchema } from "../schemas/product.js";
import { 
  getProducts,
  getFilterProducts,
  getProduct, 
  uploadImg, 
  createProduct, 
  updateProduct, 
  deleteProduct 
} from '../controllers/products.controller.js';

const router = Router();

router.get('/products', getProducts)
router.get('/products/category/:filter', getFilterProducts)
router.get('/products/id/:id', getProduct)
router.post('/products/uploadImage', authRequired, uploadImg)
router.post('/products', authRequired, validateSchema(productSchema), createProduct)
router.put('/products/:id', authRequired, updateProduct)
router.delete('/products/:id', authRequired, deleteProduct)

export default router;