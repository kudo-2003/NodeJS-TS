import { Router } from 'express';
import { getDashboardData, getAllProducts } from '../controllers/adminController';

const router = Router();

router.get('/signin', (req, res) =>{
    res.render('adminPage/adminSigninPage', {
        title: 'Admin Sign In'
    });
});

router.post('/signin', (req, res) =>{
    const { username, password } = req.body;
    if(username === 'admin' && password === '123456'){
        return res.redirect('/admin/dashboard');
    }else{
        return res.render('adminPage/adminSigninPage', {
            title: 'Đăng nhập Admin',
            error: 'Tên đăng nhập hoặc mật khẩu không đúng!',
        });
    }
});

router.get('/dashboard', async (req, res) => {
    const data = await getDashboardData();
    res.render('adminPage/adminDashboard', data);
});

router.get('/products', async (req, res) => {
    const products = await getAllProducts();
    res.render('adminPage/adminProducts', { products }, (err, html) => {
        if (err) {
            res.status(500).send('Lỗi khi tải nội dung');
        } else {
            res.send(html);
        }
    });
});


export default router;