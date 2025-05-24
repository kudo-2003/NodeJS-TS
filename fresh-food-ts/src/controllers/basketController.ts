/* The BasketController class in TypeScript handles operations related to managing a user's shopping
basket, including adding, updating, and removing items, calculating totals, and proceeding to
checkout. */
/* The BasketController class in TypeScript handles operations related to managing a user's shopping
basket, including adding, updating, and removing items, calculating totals, and proceeding to
checkout. */
// import { Request, Response } from 'express';
// import { BasketService } from '../services/basketService';
// import { ProductService } from '../services/productService';

// export class BasketController {
//   private basketService: BasketService;
//   private productService: ProductService;

//   constructor() {
//     this.basketService = new BasketService();
//     this.productService = new ProductService();
//   }

//   // Hiển thị trang giỏ hàng
//   getBasketPage = async (req: Request, res: Response): Promise<void> => {
//     try {
//       const userId = req.user?.id;
//       const basketItems = await this.basketService.getBasketByUserId(userId);
//       const total = await this.basketService.calculateTotal(userId);
      
//       res.render('homePage/basket/basket', {
//         title: 'Giỏ Hàng',
//         basketItems,
//         total,
//         user: req.user
//       });
//     } catch (error) {
//       console.error('Error loading basket page:', error);
//       res.status(500).render('error', { 
//         message: 'Không thể tải trang giỏ hàng' 
//       });
//     }
//   };

//   // Lấy danh sách items trong giỏ hàng (API)
//   getBasketItems = async (req: Request, res: Response): Promise<void> => {
//     try {
//       const userId = req.user?.id;
//       const basketItems = await this.basketService.getBasketByUserId(userId);
      
//       res.json({
//         success: true,
//         data: basketItems
//       });
//     } catch (error) {
//       console.error('Error getting basket items:', error);
//       res.status(500).json({
//         success: false,
//         message: 'Không thể lấy danh sách sản phẩm'
//       });
//     }
//   };

//   // Thêm sản phẩm vào giỏ hàng
//   addToBasket = async (req: Request, res: Response): Promise<void> => {
//     try {
//       const userId = req.user?.id;
//       const { productId, quantity = 1 } = req.body;

//       // Kiểm tra sản phẩm có tồn tại không
//       const product = await this.productService.getProductById(productId);
//       if (!product) {
//         res.status(404).json({
//           success: false,
//           message: 'Sản phẩm không tồn tại'
//         });
//         return;
//       }

//       // Kiểm tra số lượng tồn kho
//       if (product.stock < quantity) {
//         res.status(400).json({
//           success: false,
//           message: 'Số lượng vượt quá tồn kho'
//         });
//         return;
//       }

//       const basketItem = await this.basketService.addToBasket(userId, productId, quantity);
      
//       res.json({
//         success: true,
//         message: 'Đã thêm vào giỏ hàng',
//         data: basketItem
//       });
//     } catch (error) {
//       console.error('Error adding to basket:', error);
//       res.status(500).json({
//         success: false,
//         message: 'Không thể thêm sản phẩm vào giỏ hàng'
//       });
//     }
//   };

//   // Cập nhật số lượng sản phẩm trong giỏ hàng
//   updateBasketItem = async (req: Request, res: Response): Promise<void> => {
//     try {
//       const userId = req.user?.id;
//       const { productId } = req.params;
//       const { quantity } = req.body;

//       if (quantity <= 0) {
//         res.status(400).json({
//           success: false,
//           message: 'Số lượng phải lớn hơn 0'
//         });
//         return;
//       }

//       // Kiểm tra tồn kho
//       const product = await this.productService.getProductById(productId);
//       if (product && product.stock < quantity) {
//         res.status(400).json({
//           success: false,
//           message: 'Số lượng vượt quá tồn kho'
//         });
//         return;
//       }

//       const updatedItem = await this.basketService.updateBasketItem(userId, productId, quantity);
      
//       if (!updatedItem) {
//         res.status(404).json({
//           success: false,
//           message: 'Không tìm thấy sản phẩm trong giỏ hàng'
//         });
//         return;
//       }

//       res.json({
//         success: true,
//         message: 'Cập nhật thành công',
//         data: updatedItem
//       });
//     } catch (error) {
//       console.error('Error updating basket item:', error);
//       res.status(500).json({
//         success: false,
//         message: 'Không thể cập nhật sản phẩm'
//       });
//     }
//   };

//   // Xóa sản phẩm khỏi giỏ hàng
//   removeFromBasket = async (req: Request, res: Response): Promise<void> => {
//     try {
//       const userId = req.user?.id;
//       const { productId } = req.params;

//       const removed = await this.basketService.removeFromBasket(userId, productId);
      
//       if (!removed) {
//         res.status(404).json({
//           success: false,
//           message: 'Không tìm thấy sản phẩm trong giỏ hàng'
//         });
//         return;
//       }

//       res.json({
//         success: true,
//         message: 'Đã xóa sản phẩm khỏi giỏ hàng'
//       });
//     } catch (error) {
//       console.error('Error removing from basket:', error);
//       res.status(500).json({
//         success: false,
//         message: 'Không thể xóa sản phẩm'
//       });
//     }
//   };

//   // Xóa toàn bộ giỏ hàng
//   clearBasket = async (req: Request, res: Response): Promise<void> => {
//     try {
//       const userId = req.user?.id;
//       await this.basketService.clearBasket(userId);
      
//       res.json({
//         success: true,
//         message: 'Đã xóa toàn bộ giỏ hàng'
//       });
//     } catch (error) {
//       console.error('Error clearing basket:', error);
//       res.status(500).json({
//         success: false,
//         message: 'Không thể xóa giỏ hàng'
//       });
//     }
//   };

//   // Lấy số lượng items trong giỏ hàng
//   getBasketCount = async (req: Request, res: Response): Promise<void> => {
//     try {
//       const userId = req.user?.id;
//       const count = await this.basketService.getBasketCount(userId);
      
//       res.json({
//         success: true,
//         count
//       });
//     } catch (error) {
//       console.error('Error getting basket count:', error);
//       res.status(500).json({
//         success: false,
//         count: 0
//       });
//     }
//   };

//   // Lấy tổng tiền của giỏ hàng
//   getBasketTotal = async (req: Request, res: Response): Promise<void> => {
//     try {
//       const userId = req.user?.id;
//       const total = await this.basketService.calculateTotal(userId);
      
//       res.json({
//         success: true,
//         total
//       });
//     } catch (error) {
//       console.error('Error getting basket total:', error);
//       res.status(500).json({
//         success: false,
//         total: 0
//       });
//     }
//   };

//   // Chuyển sang trang thanh toán
//   proceedToCheckout = async (req: Request, res: Response): Promise<void> => {
//     try {
//       const userId = req.user?.id;
//       const basketItems = await this.basketService.getBasketByUserId(userId);
      
//       if (!basketItems || basketItems.length === 0) {
//         res.status(400).json({
//           success: false,
//           message: 'Giỏ hàng trống'
//         });
//         return;
//       }

//       // Kiểm tra tồn kho trước khi checkout
//       for (const item of basketItems) {
//         const product = await this.productService.getProductById(item.productId);
//         if (!product || product.stock < item.quantity) {
//           res.status(400).json({
//             success: false,
//             message: `Sản phẩm "${item.productName}" không đủ số lượng trong kho`
//           });
//           return;
//         }
//       }

//       // Redirect đến trang checkout
//       res.redirect('/checkout');
//     } catch (error) {
//       console.error('Error proceeding to checkout:', error);
//       res.status(500).json({
//         success: false,
//         message: 'Không thể chuyển sang trang thanh toán'
//       });
//     }
//   };
// }