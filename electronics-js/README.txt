📁 electronics-js
   ├── 📂 models        # Định nghĩa mô hình dữ liệu (MongoDB, SQL)
   │    ├── product.js  # Mô hình sản phẩm
   ├── 📂 db            # Cấu hình database, kết nối và truy vấn
   │    ├── mongodb.js  # Kết nối MongoDB
   │    ├── mysql.js    # Kết nối MySQL
   ├── 📂 controllers   # Xử lý yêu cầu từ client, logic ứng dụng
   │    ├── productController.js  # Controller sản phẩm
   ├── 📂 routes        # Định nghĩa tuyến API (Fastify router)
   │    ├── product.js  # Route sản phẩm
   ├── 📂 public        # Tài nguyên tĩnh (ảnh, CSS, JS phía client)
   │    ├── 📂 css      # File CSS
   │    ├── 📂 img      # Hình ảnh sản phẩm
   ├── 📂 views         # Giao diện người dùng (Pug templates)
   │    ├── 📂 layouts 
   |    |    ├── header.pug  # Chứa các layout chung (header, footer)
   |    |    ├── footer.pug 
   |    |    ├── main.pug 
   │    ├── 📂 pages     # Các trang chính (trang chủ, sản phẩm, giỏ hàng)
   │    ├── 📂 partials  # Thành phần tái sử dụng (navigation, banner)
   │    ├── home.pug     # Trang chủ
   │    ├── product.pug  # Trang sản phẩm
   │    ├── cart.pug     # Trang giỏ hàng
   ├── 📂 utils         # Các hàm tiện ích
   ├── 📂 services      # Xử lý API hoặc chức năng nội bộ
   ├── 📂 config        # Cấu hình hệ thống (dotenv, API keys...)
   ├── gulpfile.js      # Tự động hóa tác vụ với Gulp
   ├── package.json     # Metadata về project, dependencies
   ├── server.js        # File chính để chạy Fastify server
   ├── README.md        # Hướng dẫn sử dụng
