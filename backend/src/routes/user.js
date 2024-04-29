import { Router } from 'express';
import passport from "passport";

import { createUser, getUser, updateUser, deleteUser } from '../controllers/user.js';
import { login, googleCallback, loginSuccess } from '../controllers/auth.js';
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { loginSchema, registerSchema } from '../schemas/auth.js';

const router = Router();

router.post('/user', validateSchema(registerSchema), createUser);
router.get('/user', authRequired, getUser);
router.put('/user', authRequired, updateUser);
router.delete('/user', authRequired, deleteUser);

router.post('/login', validateSchema(loginSchema), login);

router.get('/auth/google/callback', googleCallback);
router.get('/auth/google/success', loginSuccess);



// router.get('/auth/google',
//   passport.authenticate('google', { scope: ['email', 'profile'] })
// );

// router.get('/verify', verifyToken);

export default router;