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
│   │   ├── aboutRoutes.ts    # 🆕 Thêm route cho trang Giới thiệu
│   │   ├── freshRoutes.ts   # 🆕 Route cho trang thực phẩm tươi
│   │   ├── basketRoutes.ts
|
│   ├── controllers/         
│   │   ├── 
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
│   │   │   ├── adminDashboard.ejs  # 📊 Trang bảng điều khiển Admin (tùy chọn)
|
│   │   ├── homePage/        # 📂 Giao diện HomePage tách riêng
│   │   │   ├── home/        # 📂 Trang chủ chính
│   │   │   │   ├── home.ejs # 🏠 Trang chủ chính
│   │   │   ├── basket/      # 🛒 Giỏ hàng
│   │   │   │   ├── basket.ejs # 🛒 Trang giỏ hàng
│   │   │   ├── fresh/       # 🆕 Trang thực phẩm tươi
│   │   │   │   ├── fresh.ejs # 🥦 Giao diện thực phẩm tươi
│   │   │   ├── about/       # ℹ️ Giới thiệu
│   │   │   │   ├── about.ejs # ℹ️ Trang giới thiệu
│   │   │   ├── partials/    # 🆕 Thành phần chung của HomePage
│   │   │   │   ├── nav.ejs  # 🔗 Thanh điều hướng
│
│   ├── public/              
│   │   ├── css/
│   │   │   ├── partials/    # 📂 Các tệp CSS thành phần
│   │   │   │   ├── nav.css  # 🎨 CSS cho thanh điều hướng
│   │   ├── js/
│   │   │   ├── about/       # 📂 Script cho trang Giới thiệu
│   │   │   │   ├── about.js # 📜 JavaScript cho trang about.ejs
│   │   ├── images/
│   │   │   ├── about/       # 📂 Hình ảnh trang Giới thiệu
│   │   │   │   ├── ca.jpg   # 🐟 Hình ảnh con cá
│   │   │   ├── basket/      # 📂 Hình ảnh trang Giỏ hàng
│   │   │   │   ├── rung.png # 🌳 Hình ảnh rừng
│   │   │   ├── home/        # 📂 Hình ảnh trang Home
│   │   │   │   ├── food.png # 🍽️ Hình ảnh thực phẩm
│
│   ├── server.ts            # 🚀 Cấu hình Express app
│   ├── index.ts             # 🔁 Khởi chạy server
│
├── .env                    
├── package.json            
├── tsconfig.json
