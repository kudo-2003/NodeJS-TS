// src/routes/homeRoutes.ts
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('homePage/home/home');
});

export default router;
