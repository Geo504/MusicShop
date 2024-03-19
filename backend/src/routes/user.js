import { Router } from 'express';

import { createUser, getUser, updateUser, deleteUser, login, logout, verifyToken} from '../controllers/user.js';
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { loginSchema, registerSchema } from '../schemas/auth.js';

const router = Router();

router.post('/user', validateSchema(registerSchema), createUser);
// router.get('/users', getUsers);
router.get('/user', authRequired, getUser);
router.put('/user', authRequired, updateUser);
router.delete('/user', authRequired, deleteUser);

router.post('/login', validateSchema(loginSchema), login);
router.post('/logout', logout);

router.get('/verify', verifyToken);

export default router;