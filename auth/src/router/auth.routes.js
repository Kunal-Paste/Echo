import express from 'express'
import * as authController from '../controller/auth.controller.js';
import * as authValidator from '../middleware/auth.validation.js';
import passport from 'passport';

const router = express.Router();

router.post('/register', authValidator.registerValidator, authController.registerUser);

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
  passport.authenticate('google', { session: false }),
  authController.googleAuthCallback
);

export default router;