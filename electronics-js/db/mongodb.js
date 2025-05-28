const mongoose = require('mongoose');

async function connectMongoDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/electronics', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Đã kết nối database mongodb thành công!");
    } catch (error) {
        console.error("❌ Lỗi kết nối database:", error);
        process.exit(1); // Thoát nếu lỗi
    }
}

module.exports = connectMongoDB;
