import { Router, Request, Response } from 'express';

const router = Router();


router.get('/', (req, res) => {
  res.render('homePage/basket/basket');
});

// // Route hiển thị trang giỏ hàng
// router.get('/', authMiddleware, basketController.getBasketPage);

// // API Routes cho giỏ hàng
// router.get('/api/items', authMiddleware, basketController.getBasketItems);

// // Thêm sản phẩm vào giỏ hàng
// router.post('/api/add', authMiddleware, basketController.addToBasket);

// // Cập nhật số lượng sản phẩm trong giỏ hàng
// router.put('/api/update/:productId', authMiddleware, basketController.updateBasketItem);

// // Xóa sản phẩm khỏi giỏ hàng
// router.delete('/api/remove/:productId', authMiddleware, basketController.removeFromBasket);

// // Xóa toàn bộ giỏ hàng
// router.delete('/api/clear', authMiddleware, basketController.clearBasket);

// // Lấy số lượng items trong giỏ hàng (cho badge/counter)
// router.get('/api/count', authMiddleware, basketController.getBasketCount);

// // Lấy tổng tiền của giỏ hàng
// router.get('/api/total', authMiddleware, basketController.getBasketTotal);

// // Route chuyển sang trang thanh toán
// router.post('/checkout', authMiddleware, basketController.proceedToCheckout);

export default router;