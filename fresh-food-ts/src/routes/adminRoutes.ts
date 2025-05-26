import { Router } from 'express';

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

router.get('/dashboard', (req, res) => {
    res.render('adminPage/adminDashboardPage', {
        title: 'Bảng điều khiển Admin'
    });
});


export default router;