import { Router } from "express";

import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { productLikeSchema } from "../schemas/product.js";
import { getUserLikes, updateUserLikes, getLikesProducts } from '../controllers/userLikes.controller.js';


const router = Router();

router.get('/userLikes', authRequired, getUserLikes)
router.get('/userLikes/products', authRequired, getLikesProducts)
router.post('/userLikes', authRequired, validateSchema(productLikeSchema), updateUserLikes)

export default router;