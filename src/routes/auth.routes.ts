import { Router } from 'express';

import { authController } from '_controllers';

const router = Router();

router.post('/login', authController.login);

export default router;
