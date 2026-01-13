import express from 'express';
import multer from 'multer';
import * as musicController from '../controller/music.controller.js';
import * as authMiddleware from '../middleware/auth.middleware.js'

const upload = multer({
    storage:multer.memoryStorage()
});

const router = express.Router();


router.post('/upload', authMiddleware.authArtistMiddleware, upload.fields([
    {name:'music', maxCount:1},
    {name:'coverImage', maxCount:1}
]), musicController.uploadContent);


export default router;