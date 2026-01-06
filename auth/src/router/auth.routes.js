import express from 'express'
import * as authController from '../controller/auth.controller.js';
import * as authValidator from '../middleware/auth.validation.js';

const router = express.Router();

router.post('/register', authValidator.registerValidator, authController.registerUser);

export default router;