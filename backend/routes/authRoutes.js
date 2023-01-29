import { Router } from "express";
import { login, register, logout, refreshToken } from "../controllers/authControllers.js";
import { protect } from "../utils/middleware.js";
const router = Router();

router.post('/register',register)
router.post('/login',login)
router.delete('/logout',protect,logout)
router.post('/refresh-token',refreshToken)

export default router;