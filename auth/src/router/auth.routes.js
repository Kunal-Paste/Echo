import express from 'express'
import * as authController from '../controller/auth.controller.js';

const router = express.Router();

router.post('/register', authController.registerUser);

export default router;