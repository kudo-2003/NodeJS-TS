fresh-food-ts/
│
├── src/
│   ├── config/               
│   │   ├── db.ts            
│   │   ├── env.ts           
│
│   ├── models/              
│   │   ├── product.ts
│   │   ├── user.ts
│   │   ├── order.ts
│   │   ├── admin.ts
│
│   ├── routes/              
│   │   ├── productRoutes.ts
│   │   ├── orderRoutes.ts
│   │   ├── userRoutes.ts
│   │   ├── adminRoutes.ts
│   │   ├── homeRoutes.ts
│   │   ├── aboutRoutes.ts    # 🆕 Thêm route cho trang Giới thiệu
| 
│   ├── controllers/         
│   │   ├── productController.ts
│   │   ├── orderController.ts
│   │   ├── userController.ts
│   │   ├── adminController.ts
│
│   ├── middlewares/         
│   │   ├── errorHandler.ts
│
│   ├── services/            
│   │   ├── productService.ts
│   │   ├── orderService.ts
│
│   ├── utils/               
│   │   ├── formatDate.ts
│   │   ├── generateToken.ts
│
│   ├── views/               # 🎨 Giao diện EJS
│   │   ├── adminPanel.ejs
│   │   ├── orderList.ejs
│   │   ├── homePage/        # 📂 Giao diện HomePage tách riêng
│   │   │   ├── home/        # 📂 Trang chủ chính
│   │   │   │   ├── home.ejs # 🏠 Trang chủ chính
│   │   │   ├── basket/      # 🛒 Giỏ hàng
│   │   │   │   ├── basket.ejs # 🛒 Trang giỏ hàng
│   │   │   ├── about/       # ℹ️ Giới thiệu
│   │   │   │   ├── about.ejs # ℹ️ Trang giới thiệu
│
│   ├── public/              
│   │   ├── css/
│   │   │   ├── style.css
│   │   ├── js/
│   │   │   ├── script.js
│   │   ├── images/
│   │   │   ├── banner.jpg
│   │   │   ├── product-1.jpg
│   │   │   ├── product-2.jpg
│   │   │   ├── product-3.jpg
│
│   ├── server.ts            # 🚀 Cấu hình Express app
│   ├── index.ts             # 🔁 Khởi chạy server
│
├── .env                    
├── package.json            
├── tsconfig.json
