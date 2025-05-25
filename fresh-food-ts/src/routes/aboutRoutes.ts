import { Router } from 'express';

const router = Router();

router.get('/', (req, res) =>{
    res.render('homePage/about/about', {
        title: 'Giới thiệu về Fresh Food',
        description: 'Fresh Food là một nền tảng cung cấp thực phẩm tươi ngon và an toàn, kết nối người tiêu dùng với nông dân địa phương.',
    });
});

export default router;