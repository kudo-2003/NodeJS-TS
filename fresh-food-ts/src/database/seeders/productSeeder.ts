import { Product } from "../../models/product"; // Điều chỉnh đường dẫn nếu cần

const seedProducts = async () => {
  try {
    await Product.bulkCreate([
      { name: "Táo đỏ", price: 30000, stock: 50 },
      { name: "Chuối tiêu", price: 25000, stock: 40 },
      { name: "Dâu tây", price: 45000, stock: 30 },
    ]);
    console.log("✅ Dữ liệu sản phẩm đã được seed!");
  } catch (error) {
    console.error("❌ Lỗi khi seeding sản phẩm:", error);
  }
};

// Chạy seeder khi file này được gọi
seedProducts();
