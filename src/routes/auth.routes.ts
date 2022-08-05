import { Router } from 'express';
import { authMiddleware } from '_middleware';
import { authController } from '_controllers';

const router = Router();

router.post('/login', authController.login);
router.post('/register', authController.register);
router.get('/profile', authMiddleware, authController.profile);

export default router;
