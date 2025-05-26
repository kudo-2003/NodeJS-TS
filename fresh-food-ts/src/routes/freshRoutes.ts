import { Router } from 'express';

const router = Router();

router.get('/', (req, res) =>{
    res.render('homePage/fresh/fresh', {
        title: 'Fresh Food',
        description: 'Explore our fresh food selection',
        keywords: 'fresh, food, organic, local'
    });
});

export default router;