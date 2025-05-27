fresh-food-ts/
│
├── src/
│   ├── database/
│   │   ├── connection.ts   # 🔗 Cấu hình kết nối database
│   │   ├── migrations/     # 📜 Các file migration database
│   │   ├── seeders/        # 🌱 Dữ liệu mặc định (seeding)
│
│   ├── data/
│   │   ├── products.json   # 🛒 Danh sách sản phẩm mẫu
│   │   ├── users.json      # 👤 Danh sách người dùng mẫu
│
│   ├── config/               
│   │   ├── db.ts            
│   │   ├── env.ts           
│
│   ├── models/              
│   │   ├── admin.ts
│
│   ├── routes/              
│   │   ├── adminRoutes.ts
│   │   ├── homeRoutes.ts
│   │   ├── aboutRoutes.ts    # 🆕 Route cho trang Giới thiệu
│   │   ├── freshRoutes.ts   # 🆕 Route cho trang thực phẩm tươi
│   │   ├── basketRoutes.ts
|
│   ├── controllers/         
│   │   ├── adminController.ts  # 🎯 Controller cho Admin
│   │   ├── productController.ts  # 🛒 Controller cho sản phẩm
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
│   │   ├── adminPage/       # 📂 Giao diện Admin
│   │   │   ├── adminSigninPage.ejs # 🔐 Trang đăng nhập Admin
│   │   │   ├── adminDashboard.ejs  # 📊 Trang bảng điều khiển Admin
│   │   │   ├── adminProducts.ejs  # 🛒 Trang quản lý sản phẩm
|
│   │   ├── homePage/        # 📂 Giao diện HomePage
│   │   │   ├── home/
│   │   │   │   ├── home.ejs
│   │   │   ├── basket/
│   │   │   │   ├── basket.ejs
│   │   │   ├── fresh/
│   │   │   │   ├── fresh.ejs
│   │   │   ├── about/
│   │   │   │   ├── about.ejs
│   │   │   ├── partials/
│   │   │   │   ├── nav.ejs
│
│   ├── public/              
│   │   ├── css/
│   │   │   ├── admin/       # 📂 CSS cho Admin
│   │   │   │   ├── adminDashboardPage.css # 📊 CSS bảng điều khiển Admin
│   │   │   │   ├── adminSignInPage.css # 🔐 CSS trang đăng nhập Admin
│   │   │   ├── about/       # 📂 CSS cho trang Giới thiệu
│   │   │   │   ├── aboutPage.css # ℹ️ CSS trang giới thiệu
│   │   │   ├── home/        # 📂 CSS cho trang Home
│   │   │   │   ├── homePage.css # 🏠 CSS trang chủ
│   │   │   ├── fresh/       # 📂 CSS cho trang thực phẩm tươi
│   │   │   │   ├── freshPage.css # 🥦 CSS trang thực phẩm tươi
│   │   ├── js/
│   │   │   ├── about/
│   │   │   │   ├── about.js
│   │   ├── images/
│
│   ├── server.ts            # 🚀 Cấu hình Express app
│   ├── index.ts             # 🔁 Khởi chạy server
│
├── .env                    
├── package.json            
├── tsconfig.json
