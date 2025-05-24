// import mongoose, { Schema, Document } from 'mongoose';

// // Interface cho BasketItem
// export interface BasketItem {
//   productId: string;
//   productName: string;
//   price: number;
//   quantity: number;
//   image?: string;
//   addedAt: Date;
//   updatedAt: Date;
// }

// // Interface cho Basket Document
// export interface IBasket extends Document {
//   userId: string;
//   items: BasketItem[];
//   createdAt: Date;
//   updatedAt: Date;
//   getTotalAmount(): number;
//   getTotalItems(): number;
// }

// // Schema cho BasketItem
// const BasketItemSchema = new Schema<BasketItem>({
//   productId: {
//     type: Schema.Types.ObjectId,
//     ref: 'Product',
//     required: true
//   },
//   productName: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   price: {
//     type: Number,
//     required: true,
//     min: 0
//   },
//   quantity: {
//     type: Number,
//     required: true,
//     min: 1,
//     default: 1
//   },
//   image: {
//     type: String,
//     trim: true
//   },
//   addedAt: {
//     type: Date,
//     default: Date.now
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now
//   }
// }, {
//   _id: false // Không tạo _id cho subdocument
// });

// // Schema cho Basket
// const BasketSchema = new Schema<IBasket>({
//   userId: {
//     type: Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//     unique: true // Mỗi user chỉ có một giỏ hàng
//   },
//   items: [BasketItemSchema],
//   createdAt: {
//     type: Date,
//     default: Date.now
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now
//   }
// }, {
//   timestamps: true, // Tự động cập nhật createdAt và updatedAt
//   collection: 'baskets'
// });

// // Index để tối ưu truy vấn
// BasketSchema.index({ userId: 1 });
// BasketSchema.index({ 'items.productId': 1 });
// BasketSchema.index({ updatedAt: -1 });

// // Middleware trước khi save
// BasketSchema.pre('save', function(next) {
//   if (this.isModified('items')) {
//     this.updatedAt = new Date();
//   }
//   next();
// });

// // Virtual để tính tổng tiền
// BasketSchema.virtual('totalAmount').get(function() {
//   return this.items.reduce((total, item) => {
//     return total + (item.price * item.quantity);
//   }, 0);
// });

// // Virtual để tính tổng số lượng items
// BasketSchema.virtual('totalItems').get(function() {
//   return this.items.reduce((total, item) => {
//     return total + item.quantity;
//   }, 0);
// });

// // Method để lấy tổng tiền
// BasketSchema.methods.getTotalAmount = function(): number {
//   return this.items.reduce((total: number, item: BasketItem) => {
//     return total + (item.price * item.quantity);
//   }, 0);
// };

// // Method để lấy tổng số lượng items
// BasketSchema.methods.getTotalItems = function(): number {
//   return this.items.reduce((total: number, item: BasketItem) => {
//     return total + item.quantity;
//   }, 0);
// };

// // Method để tìm item theo productId
// BasketSchema.methods.findItem = function(productId: string): BasketItem | undefined {
//   return this.items.find((item: BasketItem) => 
//     item.productId.toString() === productId
//   );
// };

// // Method để kiểm tra sản phẩm có trong giỏ hàng không
// BasketSchema.methods.hasProduct = function(productId: string): boolean {
//   return this.items.some((item: BasketItem) => 
//     item.productId.toString() === productId
//   );
// };

// // Method để xóa items hết hạn (nếu cần)
// BasketSchema.methods.removeExpiredItems = function(expiryHours: number = 24): void {
//   const expiryTime = new Date();
//   expiryTime.setHours(expiryTime.getHours() - expiryHours);
  
//   this.items = this.items.filter((item: BasketItem) => 
//     item.updatedAt > expiryTime
//   );
// };

// // Static method để tìm giỏ hàng theo userId
// BasketSchema.statics.findByUserId = function(userId: string) {
//   return this.findOne({ userId }).populate({
//     path: 'items.productId',
//     model: 'Product',
//     select: 'name price stock image category'
//   });
// };

// // Static method để tạo hoặc lấy giỏ hàng
// BasketSchema.statics.findOrCreateByUserId = async function(userId: string) {
//   let basket = await this.findOne({ userId });
  
//   if (!basket) {
//     basket = new this({
//       userId,
//       items: [],
//       createdAt: new Date(),
//       updatedAt: new Date()
//     });
//     await basket.save();
//   }
  
//   return basket;
// };

// // Đảm bảo virtual fields được include khi convert to JSON
// BasketSchema.set('toJSON', { 
//   virtuals: true,
//   transform: function(doc, ret) {
//     delete ret._id;
//     delete ret.__v;
//     return ret;
//   }
// });

// BasketSchema.set('toObject', { 
//   virtuals: true 
// });

// // Export model
// export const Basket = mongoose.model<IBasket>('Basket', BasketSchema);

// // Export types
// export { IBasket as BasketDocument };