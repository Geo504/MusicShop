import { Router } from 'express';

import { getUsers, login, createUsers, logout, verifyToken, profile, deleteUser } from '../controllers/users.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { loginSchema, registerSchema } from '../schemas/auth.js';

const router = Router();

router.get('/users', getUsers);
router.post('/login', validateSchema(loginSchema), login);
router.post('/register', validateSchema(registerSchema), createUsers);
router.post('/logout', logout);
router.get('/verify', verifyToken);
router.get('/profile', authRequired, profile);
router.delete('/users/:id', authRequired, deleteUser);
// router.put('/users/:id', putUsers);

export default router;