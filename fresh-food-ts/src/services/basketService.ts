// import { Basket, BasketItem } from '../models/basket';
// import { Product } from '../models/product';

// export class BasketService {
  
//   // Lấy giỏ hàng theo userId
//   async getBasketByUserId(userId: string): Promise<BasketItem[]> {
//     try {
//       const basket = await Basket.findOne({ userId }).populate({
//         path: 'items.productId',
//         model: 'Product'
//       });
      
//       return basket?.items || [];
//     } catch (error) {
//       console.error('Error getting basket by userId:', error);
//       throw new Error('Không thể lấy giỏ hàng');
//     }
//   }

//   // Thêm sản phẩm vào giỏ hàng
//   async addToBasket(userId: string, productId: string, quantity: number): Promise<BasketItem> {
//     try {
//       let basket = await Basket.findOne({ userId });
      
//       // Nếu chưa có giỏ hàng, tạo mới
//       if (!basket) {
//         basket = new Basket({
//           userId,
//           items: [],
//           createdAt: new Date(),
//           updatedAt: new Date()
//         });
//       }

//       // Kiểm tra sản phẩm đã có trong giỏ hàng chưa
//       const existingItemIndex = basket.items.findIndex(
//         item => item.productId.toString() === productId
//       );

//       if (existingItemIndex > -1) {
//         // Nếu đã có, cập nhật số lượng
//         basket.items[existingItemIndex].quantity += quantity;
//         basket.items[existingItemIndex].updatedAt = new Date();
//       } else {
//         // Nếu chưa có, thêm mới
//         const product = await Product.findById(productId);
//         if (!product) {
//           throw new Error('Sản phẩm không tồn tại');
//         }

//         basket.items.push({
//           productId,
//           productName: product.name,
//           price: product.price,
//           quantity,
//           image: product.image,
//           addedAt: new Date(),
//           updatedAt: new Date()
//         });
//       }

//       basket.updatedAt = new Date();
//       await basket.save();

//       // Trả về item vừa thêm/cập nhật
//       const updatedBasket = await this.getBasketByUserId(userId);
//       return updatedBasket.find(item => item.productId.toString() === productId)!;
//     } catch (error) {
//       console.error('Error adding to basket:', error);
//       throw new Error('Không thể thêm sản phẩm vào giỏ hàng');
//     }
//   }

//   // Cập nhật số lượng sản phẩm trong giỏ hàng
//   async updateBasketItem(userId: string, productId: string, quantity: number): Promise<BasketItem | null> {
//     try {
//       const basket = await Basket.findOne({ userId });
//       if (!basket) {
//         return null;
//       }

//       const itemIndex = basket.items.findIndex(
//         item => item.productId.toString() === productId
//       );

//       if (itemIndex === -1) {
//         return null;
//       }

//       basket.items[itemIndex].quantity = quantity;
//       basket.items[itemIndex].updatedAt = new Date();
//       basket.updatedAt = new Date();

//       await basket.save();

//       const updatedBasket = await this.getBasketByUserId(userId);
//       return updatedBasket.find(item => item.productId.toString() === productId) || null;
//     } catch (error) {
//       console.error('Error updating basket item:', error);
//       throw new Error('Không thể cập nhật sản phẩm');
//     }
//   }

//   // Xóa sản phẩm khỏi giỏ hàng
//   async removeFromBasket(userId: string, productId: string): Promise<boolean> {
//     try {
//       const basket = await Basket.findOne({ userId });
//       if (!basket) {
//         return false;
//       }

//       const initialLength = basket.items.length;
//       basket.items = basket.items.filter(
//         item => item.productId.toString() !== productId
//       );

//       if (basket.items.length === initialLength) {
//         return false; // Không tìm thấy sản phẩm để xóa
//       }

//       basket.updatedAt = new Date();
//       await basket.save();
//       return true;
//     } catch (error) {
//       console.error('Error removing from basket:', error);
//       throw new Error('Không thể xóa sản phẩm');
//     }
//   }

//   // Xóa toàn bộ giỏ hàng
//   async clearBasket(userId: string): Promise<void> {
//     try {
//       const basket = await Basket.findOne({ userId });
//       if (basket) {
//         basket.items = [];
//         basket.updatedAt = new Date();
//         await basket.save();
//       }
//     } catch (error) {
//       console.error('Error clearing basket:', error);
//       throw new Error('Không thể xóa giỏ hàng');
//     }
//   }

//   // Lấy số lượng items trong giỏ hàng
//   async getBasketCount(userId: string): Promise<number> {
//     try {
//       const basket = await Basket.findOne({ userId });
//       if (!basket) {
//         return 0;
//       }

//       return basket.items.reduce((total, item) => total + item.quantity, 0);
//     } catch (error) {
//       console.error('Error getting basket count:', error);
//       return 0;
//     }
//   }

//   // Tính tổng tiền của giỏ hàng
//   async calculateTotal(userId: string): Promise<number> {
//     try {
//       const basketItems = await this.getBasketByUserId(userId);
      
//       return basketItems.reduce((total, item) => {
//         return total + (item.price * item.quantity);
//       }, 0);
//     } catch (error) {
//       console.error('Error calculating total:', error);
//       return 0;
//     }
//   }

//   // Kiểm tra tính hợp lệ của giỏ hàng trước khi checkout
//   async validateBasket(userId: string): Promise<{ valid: boolean; errors: string[] }> {
//     try {
//       const basketItems = await this.getBasketByUserId(userId);
//       const errors: string[] = [];

//       if (basketItems.length === 0) {
//         errors.push('Giỏ hàng trống');
//         return { valid: false, errors };
//       }

//       // Kiểm tra từng sản phẩm
//       for (const item of basketItems) {
//         const product = await Product.findById(item.productId);
        
//         if (!product) {
//           errors.push(`Sản phẩm "${item.productName}" không còn tồn tại`);
//           continue;
//         }

//         if (product.stock < item.quantity) {
//           errors.push(`Sản phẩm "${item.productName}" chỉ còn ${product.stock} trong kho`);
//         }

//         if (product.price !== item.price) {
//           errors.push(`Giá sản phẩm "${item.productName}" đã thay đổi`);
//         }
//       }

//       return {
//         valid: errors.length === 0,
//         errors
//       };
//     } catch (error) {
//       console.error('Error validating basket:', error);
//       return {
//         valid: false,
//         errors: ['Không thể kiểm tra giỏ hàng']
//       };
//     }
//   }

//   // Đồng bộ giá sản phẩm trong giỏ hàng với giá hiện tại
//   async syncBasketPrices(userId: string): Promise<void> {
//     try {
//       const basket = await Basket.findOne({ userId });
//       if (!basket) {
//         return;
//       }

//       let hasChanges = false;

//       for (const item of basket.items) {
//         const product = await Product.findById(item.productId);
//         if (product && product.price !== item.price) {
//           item.price = product.price;
//           item.updatedAt = new Date();
//           hasChanges = true;
//         }
//       }

//       if (hasChanges) {
//         basket.updatedAt = new Date();
//         await basket.save();
//       }
//     } catch (error) {
//       console.error('Error syncing basket prices:', error);
//       throw new Error('Không thể đồng bộ giá sản phẩm');
//     }
//   }
// }