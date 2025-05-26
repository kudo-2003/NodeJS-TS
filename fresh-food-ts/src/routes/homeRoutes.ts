// src/routes/homeRoutes.ts
import express from 'express';
import { getHomePage, subscribeNewsletter } from '../controllers/homeController';

const router = express.Router();

router.get('/', getHomePage);
router.post('/subscribe', subscribeNewsletter);

export default router;


