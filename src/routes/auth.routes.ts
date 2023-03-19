import { Router } from 'express';
import { authMiddleware } from '_middleware';
import { loginValidate } from '_schemas';
import { authController, paymentController } from '_controllers';

const router = Router();

router.post('/login', loginValidate, authController.login);
router.post('/register', authController.register);
router.get('/profile', authMiddleware, authController.profile);

router.get('/payment', paymentController.getPaymentInt);

export default router;
