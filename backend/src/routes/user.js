import { Router } from 'express';

import { createUser, getUser, updateUser, deleteUser, login} from '../controllers/user.js';
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { loginSchema, registerSchema } from '../schemas/auth.js';

const router = Router();

router.post('/user', validateSchema(registerSchema), createUser);
router.get('/user', authRequired, getUser);
router.put('/user', authRequired, updateUser);
router.delete('/user', authRequired, deleteUser);

router.post('/login', validateSchema(loginSchema), login);

// router.get('/verify', verifyToken);

export default router;