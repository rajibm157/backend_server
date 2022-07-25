import { Router } from "express";

import { login } from "_controllers";

const router = Router();

router.get("/login", login);

export default router;
